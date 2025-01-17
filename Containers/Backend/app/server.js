const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
      openapi: "3.0.0",
      info: {
          title: "Backend documentation",
          version: "1.0.0",
          description: "Documentation for backend endpoints",
        },
        servers: [
            {
                url: `http://localhost:${port}`,
                description: "Development server"
            }
        ]
    },
    apis: ["./app/*.js"],
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'user',
    password: 'BTHDonken',
    database: 'burger_db',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Failed to connect to the database, error:', err.stack);
        return;
    }
    console.log('Successfully connected to BTHDonkens database!');
});

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Creates a new order sent from the frontend with the client, stores the order in database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               burgers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *               extras:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *               drinks:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *               totalCost:
 *                 type: number
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 orderId:
 *                   type: integer
 *       500:
 *         description: An error occurred while creating the order
 */
app.post('/api/order', (req, res) => {
    const { burgers, extras, drinks, totalCost } = req.body;
  
    connection.query('INSERT INTO Orders (order_total) VALUES (?)', [totalCost], (err, result) => {
      if (err) {
        console.error('Error creating order:', err);
        res.status(500).json({ message: 'An error occurred while creating the order' });
        return;
      }
  
      const orderId = result.insertId;

      burgers.forEach((burgerIngredients) => {
        connection.query('INSERT INTO Burgers () VALUES ()', (err, burgerResult) => {
          if (err) {
            console.error('Error creating burger:', err);
            res.status(500).json({ message: 'An error occurred while creating the burger' });
            return;
          }
  
          const burgerId = burgerResult.insertId;
          connection.query('INSERT INTO OrderBurgers (order_id, burger_id) VALUES (?, ?)', [orderId, burgerId], (err) => {
            if (err) {
              console.error('Error creating order burger:', err);
              res.status(500).json({ message: 'An error occurred while creating the order burger' });
              return;
            }
  
            burgerIngredients.forEach((ingredient) => {
              connection.query('INSERT INTO BurgerIngredients (burger_id, ingredient_id, quantity) VALUES (?, ?, ?)', [burgerId, ingredient.id, ingredient.quantity], (err) => {
                if (err) {
                  console.error('Error creating burger ingredient:', err);
                  res.status(500).json({ message: 'An error occurred while creating the burger ingredient' });
                  return;
                }
              });
            });
          });
        });
      });
  
      extras.forEach((extra) => {
        connection.query('INSERT INTO OrderDetails (order_id, extra_id, quantity) VALUES (?, ?, ?)', [orderId, extra.id, extra.quantity], (err) => {
          if (err) {
            console.error('Error creating order extra:', err);
            res.status(500).json({ message: 'An error occurred while creating the order extra' });
            return;
          }
        });
      });
  
      drinks.forEach((drink) => {
        connection.query('INSERT INTO OrderDetails (order_id, drink_id, quantity) VALUES (?, ?, ?)', [orderId, drink.id, 1], (err) => {
          if (err) {
            console.error('Error creating order drink:', err);
            res.status(500).json({ message: 'An error occurred while creating the order drink' });
            return;
          }
        });
      });
  
      res.status(201).json({ message: 'Order created successfully', orderId: orderId });
    });
});

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Retrieve all orders
 *     responses:
 *       200:
 *         description: A list of orders - used in the frontend of kitchenview to see all the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       orderId:
 *                         type: integer
 *                       totalCost:
 *                         type: number
 *                       burgers:
 *                         type: array
 *                         items: {}
 *                       extraItems:
 *                         type: array
 *                         items: {}
 *                       drinks:
 *                         type: array
 *                         items: {}
 *       500:
 *         description: An error occurred while fetching the orders
 */
app.get('/api/orders', (req, res) => {
    const ordersQuery = `
      SELECT 
        order_id AS orderId,
        order_total AS totalCost
      FROM Orders
      ORDER BY order_id;
    `;

    connection.query(ordersQuery, (err, ordersResults) => {
        if (err) {
            console.error('Error fetching orders:', err);
            res.status(500).json({ message: 'An error occurred while fetching the orders' });
            return;
        }

        const orders = ordersResults.map(order => ({
            orderId: order.orderId,
            totalCost: order.totalCost,
            burgers: [],
            extraItems: [],
            drinks: []
        }));

        if (orders.length === 0) {
            res.status(200).json({ orders });
            return;
        }

        const orderIds = orders.map(order => order.orderId);

        const drinksQuery = `
          SELECT 
            o.order_id AS orderId,
            d.drink_id AS drinkId,
            d.drink_name AS drinkName
          FROM Orders o
          LEFT JOIN OrderDetails od ON o.order_id = od.order_id
          LEFT JOIN DrinkItems d ON od.drink_id = d.drink_id
          WHERE o.order_id IN (?) AND d.drink_id IS NOT NULL;
        `;

        connection.query(drinksQuery, [orderIds], (err, drinksResults) => {
            if (err) {
                console.error('Error fetching drinks:', err);
                res.status(500).json({ message: 'An error occurred while fetching the drinks' });
                return;
            }

            drinksResults.forEach(drink => {
                const order = orders.find(o => o.orderId === drink.orderId);
                if (order) {
                    order.drinks.push({
                        drinkId: drink.drinkId,
                        drinkName: drink.drinkName
                    });
                }
            });

            const extrasQuery = `
              SELECT 
                o.order_id AS orderId,
                e.extra_id AS extraId,
                e.extra_name AS extraName,
                od.quantity AS extraQuantity
              FROM Orders o
              LEFT JOIN OrderDetails od ON o.order_id = od.order_id
              LEFT JOIN ExtraItems e ON od.extra_id = e.extra_id
              WHERE o.order_id IN (?) AND e.extra_id IS NOT NULL;
            `;

            connection.query(extrasQuery, [orderIds], (err, extrasResults) => {
                if (err) {
                    console.error('Error fetching extra items:', err);
                    res.status(500).json({ message: 'An error occurred while fetching the extra items' });
                    return;
                }

                extrasResults.forEach(extra => {
                    const order = orders.find(o => o.orderId === extra.orderId);
                    if (order) {
                        order.extraItems.push({
                            extraId: extra.extraId,
                            extraName: extra.extraName,
                            quantity: extra.extraQuantity
                        });
                    }
                });

                const burgersQuery = `
                  SELECT 
                    o.order_id AS orderId,
                    b.burger_id AS burgerId,
                    bi.ingredient_id AS ingredientId,
                    i.ingredient_name AS ingredientName,
                    bi.quantity AS ingredientQuantity
                  FROM Orders o
                  LEFT JOIN OrderBurgers ob ON o.order_id = ob.order_id
                  LEFT JOIN Burgers b ON ob.burger_id = b.burger_id
                  LEFT JOIN BurgerIngredients bi ON b.burger_id = bi.burger_id
                  LEFT JOIN Ingredients i ON bi.ingredient_id = i.ingredient_id
                  WHERE o.order_id IN (?) AND b.burger_id IS NOT NULL;
                `;

                connection.query(burgersQuery, [orderIds], (err, burgersResults) => {
                    if (err) {
                        console.error('Error fetching burgers:', err);
                        res.status(500).json({ message: 'An error occurred while fetching the burgers' });
                        return;
                    }

                    burgersResults.forEach(burger => {
                        const order = orders.find(o => o.orderId === burger.orderId);
                        if (order) {
                            order.burgers.push({
                                burgerId: burger.burgerId,
                                ingredients: [{
                                    ingredientId: burger.ingredientId,
                                    ingredientName: burger.ingredientName,
                                    quantity: burger.ingredientQuantity
                                }]
                            });
                        }
                    });

                    res.status(200).json({ orders });
                });
            });
        });
    });
});

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Retrieve all items
 *     responses:
 *       200:
 *         description: A list of items taken from the database - used in the frontend to display correct names -> prices etc.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       type:
 *                         type: string
 *                       quantity:
 *                         type: integer
 *       500:
 *         description: An error occurred while fetching the items
 */
app.get('/api/items', (req, res) => {
    connection.query('SELECT * FROM Items', (err, results) => {
        if (err) {
            console.error('Error fetching items:', err);
            res.status(500).json({ message: 'An error occurred while fetching the items' });
            return;
        }
        res.status(200).json({ items: results });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
