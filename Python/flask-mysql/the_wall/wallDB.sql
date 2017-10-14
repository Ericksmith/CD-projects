-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `posts_id` int(11) NOT NULL,
  `comment` mediumtext,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comments_users1_idx` (`users_id`),
  KEY `fk_comments_posts1_idx` (`posts_id`),
  CONSTRAINT `fk_comments_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,2,'Aenean a libero maximus, posuere nisl sed, sollicitudin nibh. Maecenas ut tellus lacus. Phasellus ante elit, fringilla eu laoreet et, faucibus in sapien. Etiam eget odio a urna feugiat mattis sed vitae ante.','2017-10-13 21:58:49','2017-10-13 21:58:49'),(2,2,2,'Vestibulum consequat ultricies odio, non semper elit sagittis eget. \nSuspendisse commodo nec diam eget semper. Aenean posuere mauris ut tempor dictum. Sed molestie at dui ut fringilla.','2017-10-13 21:59:23','2017-10-13 21:59:23'),(3,2,1,'Cras bibendum neque sagittis tortor sodales, at commodo neque volutpat. Nulla scelerisque pulvinar elit ut cursus. Aenean a libero maximus, posuere nisl sed, sollicitudin nibh.','2017-10-13 21:59:41','2017-10-13 21:59:41'),(4,3,3,'test','2017-10-14 00:05:17','2017-10-14 00:05:17'),(5,3,1,'Hi!','2017-10-14 00:07:51','2017-10-14 00:07:51'),(6,3,4,'And hello to you!','2017-10-14 09:52:12','2017-10-14 09:52:12');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `message` mediumtext,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_posts_users_idx` (`users_id`),
  CONSTRAINT `fk_posts_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'Praesent placerat, mauris nec cursus ultrices, ipsum augue dapibus nunc, \na tincidunt quam dui et sem. Phasellus ultrices arcu in accumsan tempus. Sed vitae magna feugiat, \naliquam velit sed, sollicitudin justo. Curabitur ante lacus, porttitor eu gravida sit amet, sagittis a odio. Nunc vel lacus viverra \nligula gravida tincidunt et congue justo.','2017-10-13 21:46:57','2017-10-13 21:46:57'),(2,1,'Vestibulum viverra consequat mauris, vitae condimentum eros aliquet facilisis. Phasellus finibus turpis maximus fermentum interdum. Quisque vulputate sit amet enim in aliquet. Nunc mollis est non hendrerit sodales. Nam ullamcorper pharetra enim eu ornare. In vel risus suscipit, consectetur urna sit amet, tempor orci.','2017-10-13 21:47:14','2017-10-13 21:47:14'),(3,2,'Nullam nunc libero, laoreet vel faucibus in, molestie sit amet massa. Duis tristique elit sit amet gravida aliquet. Praesent vulputate diam a lorem egestas bibendum. Proin rhoncus sapien et tristique efficitur.','2017-10-13 21:47:41','2017-10-13 21:47:41'),(4,3,'Hello!','2017-10-14 09:52:00','2017-10-14 09:52:00');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Erick','Smith','smith.s.erick@gmail.com','4428c6c474502e61151877825bb41961'),(2,'Jim','Bob','Jim@bob.com','4428c6c474502e61151877825bb41961'),(3,'Frank','Bean','Frank@mail.com','25d55ad283aa400af464c76d713c07ad');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-14 10:00:42
