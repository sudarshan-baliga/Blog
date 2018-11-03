-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.10.1

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
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `user_name` varchar(20) NOT NULL,
  `hash` varchar(100) NOT NULL,
  `details` varchar(500) DEFAULT NULL,
  `fname` varchar(20) DEFAULT NULL,
  `lname` varchar(20) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`user_name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('sudarshan','1234','Hello I am Super man. I am from planet krypton. I got stronger and better power over the time.i am a ninja warrior. I am from planet krypton. I got stronger and better power over the time.i am a ninja warrior. I am from planet krypton. I got stronger and better power over the time.','super','man','sudarshanbaliga2@gmail.com'),('sushanth','1234','Hello I am sushanth','sushanth','vokkunaya','sushanth@gmail.com');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `cid` int(11) NOT NULL,
  `cname` varchar(30) DEFAULT NULL,
  `cdescription` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (201,'Programming','blogs related to programming'),(202,'cooking','The posts related to cooking'),(203,'Travel','The posts related to Travelling');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `cid` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `content` varchar(100) DEFAULT NULL,
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cid`),
  KEY `pid` (`pid`),
  KEY `user_name` (`user_name`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `posts` (`pid`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_name`) REFERENCES `Users` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,'sudarshan','hello react','2018-10-30 11:12:26'),(2,4,'sudarshan','hello 2','2018-10-30 11:12:45'),(3,2,'sudarshan','Hello','2018-10-30 11:55:40'),(4,2,'sudarshan','Hi man','2018-10-30 12:11:57'),(5,3,'sudarshan','Test comment','2018-10-30 12:14:09'),(6,3,'sudarshan','sdfaf dsaf sdaf sd fsdfsdfsd sdf sdfsdf sad fasdfsadf','2018-10-30 12:15:53'),(7,1,'sushanth','Nice Sudarshan','2018-10-30 12:20:45'),(8,1,'sudarshan','Comments are working cool','2018-10-30 12:22:52'),(9,2,'sudarshan','fdsaf','2018-10-30 12:28:24'),(10,2,'sudarshan','fdsaffdasf','2018-10-30 12:33:08'),(11,1,'sudarshan','test','2018-10-30 13:55:25'),(12,1,'sudarshan','sdf','2018-10-30 13:59:01'),(13,1,'sudarshan','fd','2018-10-30 14:00:01'),(14,1,'sudarshan','fdas','2018-10-30 14:01:09'),(15,3,'sudarshan','fdas','2018-10-30 14:01:53'),(16,3,'sudarshan','sdf','2018-10-30 14:02:34'),(17,3,'sudarshan','fasd','2018-10-30 14:03:43'),(18,3,'sudarshan','sf','2018-10-30 14:04:46'),(19,1,'sudarshan','adf','2018-10-30 14:07:22'),(20,1,'sudarshan','zx','2018-10-30 14:08:38'),(21,4,'sudarshan','fds','2018-10-30 14:41:47'),(22,4,'sudarshan','fd','2018-10-30 14:43:25'),(23,4,'sudarshan','fd','2018-10-30 14:44:28'),(24,4,'sudarshan','f','2018-10-30 14:44:59'),(25,4,'sudarshan','fsd','2018-10-30 14:46:25'),(26,4,'sudarshan','f','2018-10-30 14:47:02'),(27,4,'sudarshan','sd','2018-10-30 14:47:25'),(28,4,'sudarshan','d','2018-10-30 14:48:11'),(29,4,'sudarshan','f','2018-10-30 14:48:43'),(30,4,'sudarshan','f','2018-10-30 14:49:07'),(31,4,'sudarshan','f','2018-10-30 14:49:28'),(32,4,'sudarshan','fff','2018-10-30 14:49:33'),(33,4,'sudarshan','fsad','2018-10-30 14:50:12'),(34,4,'sudarshan','dfas','2018-10-30 14:50:22'),(35,4,'sudarshan','sdf','2018-10-30 14:50:28'),(36,4,'sudarshan','sdfasdfasdf','2018-10-30 14:50:33'),(37,4,'sudarshan','dfs','2018-10-30 14:51:26'),(38,4,'sudarshan','fd','2018-10-30 14:51:52'),(39,4,'sudarshan','fdas','2018-10-30 14:52:29'),(40,4,'sudarshan','fds','2018-10-30 14:53:22'),(41,4,'sudarshan','fdsfdsf','2018-10-30 14:53:25'),(42,4,'sudarshan','fdsfsdfsdf','2018-10-30 14:53:31'),(43,4,'sudarshan','fdsfsdaf','2018-10-30 14:53:54'),(44,4,'sudarshan','fdsfdsfsdfasd','2018-10-30 14:53:58'),(45,4,'sudarshan','sudarshan','2018-10-30 14:54:07'),(46,2,'sudarshan','Is it healthy','2018-10-30 14:58:22'),(47,1,'sudarshan','fdsafasdf','2018-10-30 15:01:24');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `pid` int(11) NOT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `content` text,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pid`),
  KEY `user_name` (`user_name`),
  KEY `cid` (`cid`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_name`) REFERENCES `Users` (`user_name`),
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `category` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'sudarshan',201,'React UI Component Playgrounds for 2018','11 React UI Component Playgrounds for 2018. I will be listing some of the coo react libraries which were made available recently.','<h2 style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.54);background-color: rgb(255,255,255);font-size: 28px;font-family: medium-content-sans-serif-font, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Arial, sans-serif;\">Useful online playgrounds and editors for your UI components</span></h2>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">As the age of components is upon us, the building blocks of our applications UI become a bigger part of our development process.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">When building with UI components, development speed and the ability to organize and share components becomes critical in the process.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">Many tools were formed in order to aid in this workflow, from docs builders to live online playgrounds and catalogs to faster sharing.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">To help you find the right tool, here is a short (unranked) rundown of some useful playgrounds to help you visualize, test, share and develop React components. Feel free to comment and add your own suggestions!</span></p>\n<h3><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">1. Bit</span></h3>\n<p></p>\n<img src=\"https://camo.githubusercontent.com/2534a86b69b69823e5b2b9d26b37269e90d75893/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f6269742d646f63732f72656163742d6865726f2d636f6d706f6e656e742532302832292e676966\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/>\n<p style=\"text-align:start;\"><a href=\"https://bitsrc.io/\" target=\"_blank\"><span style=\"color: inherit;background-color: transparent;font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\"><strong>Bits</strong></span></a> <span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">component playground isnt the most feature-rich playground on the list.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">However,</span> <span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">Bit (</span><a href=\"https://github.com/teambit/bit\" target=\"_blank\"><span style=\"color: inherit;background-color: transparent;font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">GitHub</span></a><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">)</span> <span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">is the only tool that brings together a component playground with a full component discoverability, development and consumption workflow.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">Bit lets you isolate components (including dependancies) and share them from any project into a visual collection, from which your team can find, use and develop them anywhere.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">Every component is presented with a</span> <a href=\"https://blog.bitsrc.io/introducing-the-live-react-component-playground-d8c281352ee7\" target=\"_blank\"><span style=\"color: inherit;background-color: transparent;font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">live playground</span></a><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">, as well as test and build results which Bit runs for every component in isolation. If the component has JSDocs or .md files, Bit will auto-present the components docs as well.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">Once you choose a component you wish to use, you can install it (and only it) using NPM/Yarn -or- use Bit to import and develop it right from any project.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">Through Bit your team can organize and share components, forming a unified hub for your component design system and development in one place. Any team member can share components, update changes and stay in sync.</span></p>\n<h3 style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">2. </span><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 34px;font-family: medium-content-sans-serif-font, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Arial, sans-serif;\">Codesandbox</span></h3>\n<p></p>\n<img src=\"https://cdn-images-1.medium.com/max/1200/1*xUCCCP8hLcAa4vgjKAU_vg.gif\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/>\n<p style=\"text-align:start;\"><a href=\"https://codesandbox.io/\" target=\"_blank\"><span style=\"color: inherit;background-color: transparent;font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\"><strong>Codesandbox</strong></span></a> <span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">is a great way to play with components online. Its awesome makers</span> <a href=\"https://hackernoon.com/codesandbox-an-online-react-editor-b8945ce095d2\" target=\"_blank\"><span style=\"color: inherit;background-color: transparent;font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">describe it</span></a> <span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">as “<em>an online code editor. It automates things like transpiling, bundling and dependency management for you so you can easily create a new project in a single click. After creating something interesting you can show it to others by just sharing the url. CodeSandbox features a live preview to show the result of the code while youre typing</em>”.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">With the</span> <a href=\"https://hackernoon.com/announcing-codesandbox-2-5-be767d15ffd\" target=\"_blank\"><span style=\"color: inherit;background-color: transparent;font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">release of v2.5</span></a><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">, new UI improvements such as a new sidebar, “view-mode”, floating previews and more were introduced. It also provides configuration support, a neat integration to GitHub and an Angular template.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">The Codesandbox client is also released to</span> <a href=\"https://github.com/CompuIves/codesandbox-client\" target=\"_blank\"><span style=\"color: inherit;background-color: transparent;font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">GitHub</span></a><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">.</span></p>\n<h3 style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">3. </span><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 34px;font-family: medium-content-sans-serif-font, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Arial, sans-serif;\">StoryBook and Styleguidist</span></h3>\n<p></p>\n<img src=\"https://camo.githubusercontent.com/afa6a5df98c90ddb6b23b0fe6fba6b75c96f42b7/687474703a2f2f692e696d6775722e636f6d2f374349415770422e676966\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">StoryBook helps you develop components in isolation from your app, which also encourages better reusability and testability for your components.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">You can browse components from your library, play with their properties and get an instant impression with hot-reload on the web. You can find some popular examples</span> <a href=\"https://storybook.js.org/examples/\" target=\"_blank\"><span style=\"color: inherit;background-color: transparent;font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">here</span></a><span style=\"color: rgba(0,0,0,0.84);background-color: rgb(255,255,255);font-size: 21px;font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\">. Plugins can help make your development process faster, so you can shorten the cycle between code tweaking to visual output.</span></p>\n<p></p>\n','2018-10-27 10:53:28'),(2,'sudarshan',202,'Recipe required to make Pani puri',' Paani Poori is an Indian street food snack that nobody can resist. Mainly originating from Varanasi, it is known by different names in different parts of the country.','<h3 style=\"text-align:start;\"><br><span style=\"color: rgb(97,189,109);background-color: rgb(249,249,249);font-size: 18px;font-family: roboto, Arial, Helvetica, sans-serif;\">Ingredients Of Paani Poori</span></h3>\n<ul>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">For the Paani:</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1 Cup Sonth chutney</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">2 Cups Mint leaves (firmly packed)</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">75 Gram Coriander leaves (ground together)</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">6-7 Green chillies</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">2 Tbsp Cumin seeds (powdered), roasted</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1 Tbsp Salt</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1 tsp Chilli powder</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">8 Cups Water</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">For Sonth ki Chutney:</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">100 Gram Tamarind (soaked in warm water for half an hour at least)</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">3/4 Cup Jaggery (broken)</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">2 tsp Salt</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1 tsp Black rock salt, powdered</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1/2 tsp Garam masala</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1 tsp Dry ginger, powdered</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1/4 tsp Black pepper, powdered</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1/4 tsp Chilli powder</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1 tsp Chaat masala</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">For paani Poori:</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">24 Puffed papri</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1 Cup Potatoes (diced), boiled</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">1 Cup Chick peas, boiled</span></li>\n<li><span style=\"color: rgb(71,85,119);background-color: rgb(249,249,249);font-size: 14px;font-family: roboto, Arial, Helvetica, sans-serif;\">Paani poori ka paani</span></li>\n</ul>\n<p style=\"text-align:start;\"><span style=\"color: rgb(71,85,119);\"><br></span></p>\n','2018-10-27 11:46:15'),(3,'sushanth',202,'TEst','description','<p>fsfdafsdfasdfasdf</p>\n','2018-10-27 15:04:10'),(4,'sushanth',203,'TEST2','this is a test post by sushanth','<p>fjdsjkfsdf</p>\n<p><span style=\"color: rgb(97,189,109);\">]dsfdshfds</span></p>\n<p><span style=\"color: rgb(40,50,78);\">fsdlfdsf</span></p>\n<p><span style=\"color: rgb(40,50,78);\">ds</span></p>\n<p><span style=\"color: rgb(40,50,78);\">fds</span></p>\n<p><span style=\"color: rgb(40,50,78);\">fdsf</span></p>\n<p>ads</p>\n<p>fadsfs</p>\n','2018-10-28 11:21:35');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-30 15:17:00
