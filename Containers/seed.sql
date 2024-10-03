-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: burger_db
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
-- Table structure for table `Ingredients`
--

DROP TABLE IF EXISTS `Ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ingredients` (
  `ingredient_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `stock` bigint NOT NULL,
  PRIMARY KEY (`ingredient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ingredients`
--

LOCK TABLES `Ingredients` WRITE;
/*!40000 ALTER TABLE `Ingredients` DISABLE KEYS */;
/*!40000 ALTER TABLE `Ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drink_item`
--

DROP TABLE IF EXISTS `drink_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drink_item` (
  `drink_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`drink_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drink_item`
--

LOCK TABLES `drink_item` WRITE;
/*!40000 ALTER TABLE `drink_item` DISABLE KEYS */;
INSERT INTO `drink_item` VALUES (1,'Coca Cola'),(2,'Fanta'),(3,'Fanta Exotic'),(4,'Sprite'),(5,'Loka'),(6,'Vanilla Milkshake'),(7,'Blueberry Milkshake'),(8,'Salted Caramel Milkshake'),(9,'Latte'),(10,'Cappuccino'),(11,'Espresso'),(12,'Strawberry Smoothie'),(13,'Blueberry Smoothie'),(14,'Raspberry Smoothie'),(15,'Still Water');
/*!40000 ALTER TABLE `drink_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drink_size_flavor`
--

DROP TABLE IF EXISTS `drink_size_flavor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drink_size_flavor` (
  `drink_size_flavor_id` bigint NOT NULL AUTO_INCREMENT,
  `drink_id` bigint DEFAULT NULL,
  `size` varchar(20) NOT NULL,
  `flavor` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` bigint NOT NULL,
  PRIMARY KEY (`drink_size_flavor_id`),
  KEY `drink_id` (`drink_id`),
  CONSTRAINT `drink_size_flavor_ibfk_1` FOREIGN KEY (`drink_id`) REFERENCES `drink_item` (`drink_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drink_size_flavor`
--

LOCK TABLES `drink_size_flavor` WRITE;
/*!40000 ALTER TABLE `drink_size_flavor` DISABLE KEYS */;
INSERT INTO `drink_size_flavor` VALUES (1,1,'Small',NULL,10.00,100),(2,1,'Medium',NULL,15.00,100),(3,1,'Large',NULL,20.00,100),(4,2,'Small',NULL,10.00,100),(5,2,'Medium',NULL,15.00,100),(6,2,'Large',NULL,20.00,100),(7,3,'Small',NULL,10.00,100),(8,3,'Medium',NULL,15.00,100),(9,3,'Large',NULL,20.00,100),(10,4,'Small',NULL,10.00,100),(11,4,'Medium',NULL,15.00,100),(12,4,'Large',NULL,20.00,100),(13,5,'Small',NULL,20.00,100),(14,6,'Large',NULL,30.00,100),(15,7,'Regular',NULL,15.00,100),(16,8,'Regular',NULL,35.00,100),(17,9,'Regular',NULL,5.00,100);
/*!40000 ALTER TABLE `drink_size_flavor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `total_price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `order_item_id` bigint NOT NULL AUTO_INCREMENT,
  `order_id` bigint DEFAULT NULL,
  `item_type` varchar(50) DEFAULT NULL,
  `item_id` bigint DEFAULT NULL,
  `quantity` bigint NOT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `side_item`
--

DROP TABLE IF EXISTS `side_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `side_item` (
  `side_item_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`side_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `side_item`
--

LOCK TABLES `side_item` WRITE;
/*!40000 ALTER TABLE `side_item` DISABLE KEYS */;
INSERT INTO `side_item` VALUES (7,'Chili cheese'),(8,'French fries'),(9,'Icecream'),(10,'Dip sauces'),(11,'Chicken wings'),(12,'Mozzarella sticks');
/*!40000 ALTER TABLE `side_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `side_item_size`
--

DROP TABLE IF EXISTS `side_item_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `side_item_size` (
  `side_item_size_id` bigint NOT NULL AUTO_INCREMENT,
  `side_item_id` bigint DEFAULT NULL,
  `size` varchar(20) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` bigint NOT NULL,
  PRIMARY KEY (`side_item_size_id`),
  KEY `side_item_id` (`side_item_id`),
  CONSTRAINT `side_item_size_ibfk_1` FOREIGN KEY (`side_item_id`) REFERENCES `side_item` (`side_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `side_item_size`
--

LOCK TABLES `side_item_size` WRITE;
/*!40000 ALTER TABLE `side_item_size` DISABLE KEYS */;
INSERT INTO `side_item_size` VALUES (12,7,'5 pack',25.00,100),(13,7,'7 pack',35.00,100),(14,8,'Small',15.00,100),(15,8,'Medium',20.00,100),(16,8,'Large',25.00,100),(17,9,'Regular',25.00,100),(18,10,'Regular',8.00,100),(19,11,'5 pack',25.00,100),(20,11,'7 pack',35.00,100),(21,12,'4 pack',20.00,100),(22,12,'6 pack',25.00,100);
/*!40000 ALTER TABLE `side_item_size` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-03 16:10:50
