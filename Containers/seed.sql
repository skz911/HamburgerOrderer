-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: burger_db
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `BurgerIngredients`
--

DROP TABLE IF EXISTS `BurgerIngredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BurgerIngredients` (
  `burger_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  `quantity` int DEFAULT '1',
  PRIMARY KEY (`burger_id`,`ingredient_id`),
  KEY `ingredient_id` (`ingredient_id`),
  CONSTRAINT `BurgerIngredients_ibfk_1` FOREIGN KEY (`burger_id`) REFERENCES `Burgers` (`burger_id`),
  CONSTRAINT `BurgerIngredients_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `Ingredients` (`ingredient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BurgerIngredients`
--

/*!40000 ALTER TABLE `BurgerIngredients` DISABLE KEYS */;
INSERT INTO `BurgerIngredients` VALUES (8,1,2),(8,2,2),(8,3,3),(8,4,4),(8,5,3),(8,6,2),(8,7,9),(9,1,3),(9,3,4),(9,4,7),(9,5,3);
/*!40000 ALTER TABLE `BurgerIngredients` ENABLE KEYS */;

--
-- Table structure for table `Burgers`
--

DROP TABLE IF EXISTS `Burgers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Burgers` (
  `burger_id` int NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`burger_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Burgers`
--

/*!40000 ALTER TABLE `Burgers` DISABLE KEYS */;
INSERT INTO `Burgers` VALUES (1,NULL,NULL),(2,NULL,NULL),(3,NULL,NULL),(4,NULL,NULL),(5,NULL,NULL),(6,NULL,NULL),(7,NULL,NULL),(8,NULL,NULL),(9,NULL,NULL);
/*!40000 ALTER TABLE `Burgers` ENABLE KEYS */;

--
-- Table structure for table `DrinkItems`
--

DROP TABLE IF EXISTS `DrinkItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DrinkItems` (
  `drink_id` int NOT NULL AUTO_INCREMENT,
  `price` decimal(5,2) DEFAULT NULL,
  `drink_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`drink_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DrinkItems`
--

/*!40000 ALTER TABLE `DrinkItems` DISABLE KEYS */;
INSERT INTO `DrinkItems` VALUES (1,12.00,'Coca Cola'),(2,12.00,'Sprite'),(3,12.00,'Fanta'),(4,5.00,'Water'),(5,10.00,'Iced Tea');
/*!40000 ALTER TABLE `DrinkItems` ENABLE KEYS */;

--
-- Table structure for table `ExtraItems`
--

DROP TABLE IF EXISTS `ExtraItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ExtraItems` (
  `extra_id` int NOT NULL AUTO_INCREMENT,
  `extra_name` varchar(255) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`extra_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ExtraItems`
--

/*!40000 ALTER TABLE `ExtraItems` DISABLE KEYS */;
INSERT INTO `ExtraItems` VALUES (1,'Fries',15.00),(2,'Onion Rings',18.00),(3,'Chicken Nuggets',20.00),(4,'Mozzarella Sticks',22.00),(5,'Side Salad',10.00);
/*!40000 ALTER TABLE `ExtraItems` ENABLE KEYS */;

--
-- Table structure for table `Ingredients`
--

DROP TABLE IF EXISTS `Ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ingredients` (
  `ingredient_id` int NOT NULL AUTO_INCREMENT,
  `ingredient_name` varchar(255) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`ingredient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ingredients`
--

/*!40000 ALTER TABLE `Ingredients` DISABLE KEYS */;
INSERT INTO `Ingredients` VALUES (1,'Lettuce',5.00),(2,'Tomato',7.00),(3,'Cheese',10.00),(4,'Beef Patty',15.00),(5,'Bacon',12.00),(6,'Onion',4.00),(7,'Pickles',3.00),(8,'Ketchup',2.00),(9,'Mustard',2.00),(10,'Mayonnaise',3.00);
/*!40000 ALTER TABLE `Ingredients` ENABLE KEYS */;

--
-- Table structure for table `OrderBurgers`
--

DROP TABLE IF EXISTS `OrderBurgers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderBurgers` (
  `order_burger_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `burger_id` int DEFAULT NULL,
  PRIMARY KEY (`order_burger_id`),
  KEY `order_id` (`order_id`),
  KEY `burger_id` (`burger_id`),
  CONSTRAINT `OrderBurgers_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `Orders` (`order_id`),
  CONSTRAINT `OrderBurgers_ibfk_2` FOREIGN KEY (`burger_id`) REFERENCES `Burgers` (`burger_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderBurgers`
--

/*!40000 ALTER TABLE `OrderBurgers` DISABLE KEYS */;
INSERT INTO `OrderBurgers` VALUES (2,7,8),(3,7,9);
/*!40000 ALTER TABLE `OrderBurgers` ENABLE KEYS */;

--
-- Table structure for table `OrderDetails`
--

DROP TABLE IF EXISTS `OrderDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderDetails` (
  `order_detail_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `drink_id` int DEFAULT NULL,
  `extra_id` int DEFAULT NULL,
  `quantity` int DEFAULT '1',
  PRIMARY KEY (`order_detail_id`),
  KEY `order_id` (`order_id`),
  KEY `side_id` (`drink_id`),
  KEY `extra_id` (`extra_id`),
  CONSTRAINT `OrderDetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `Orders` (`order_id`),
  CONSTRAINT `OrderDetails_ibfk_2` FOREIGN KEY (`drink_id`) REFERENCES `DrinkItems` (`drink_id`),
  CONSTRAINT `OrderDetails_ibfk_3` FOREIGN KEY (`extra_id`) REFERENCES `ExtraItems` (`extra_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderDetails`
--

/*!40000 ALTER TABLE `OrderDetails` DISABLE KEYS */;
INSERT INTO `OrderDetails` VALUES (1,7,NULL,1,3),(2,7,NULL,4,3),(3,7,NULL,5,2),(4,7,NULL,3,1),(5,7,1,NULL,1),(6,7,2,NULL,1),(7,7,3,NULL,1);
/*!40000 ALTER TABLE `OrderDetails` ENABLE KEYS */;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `order_total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES (1,568.00),(2,568.00),(3,568.00),(4,568.00),(5,568.00),(6,568.00),(7,568.00);
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
CREATE USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'BTHDonken';

GRANT ALL PRIVILEGES ON burger_db.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
--
-- Dumping routines for database 'burger_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-14 21:57:47
