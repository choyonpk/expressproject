-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2020 at 06:53 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebanking`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(250) NOT NULL,
  `Name` varchar(250) COLLATE utf8_bin NOT NULL,
  `UserName` varchar(250) COLLATE utf8_bin NOT NULL,
  `Email` varchar(250) COLLATE utf8_bin NOT NULL,
  `ContactNO` varchar(250) COLLATE utf8_bin NOT NULL,
  `NID` varchar(250) COLLATE utf8_bin NOT NULL,
  `Gender` varchar(250) COLLATE utf8_bin NOT NULL,
  `Password` varchar(250) COLLATE utf8_bin NOT NULL,
  `UserType` varchar(250) COLLATE utf8_bin NOT NULL,
  `Address` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Name`, `UserName`, `Email`, `ContactNO`, `NID`, `Gender`, `Password`, `UserType`, `Address`) VALUES
(1, 'Namiur Rahman', 'admin1', 'naimur@gmail.com', '01688158696', '12345748532', 'Male', '12345', 'admin', 'Cumilla'),
(4, 'Sadat', 'sadat123', 'sadat@gmail.com', '01521301278', '123-456-789', 'Male', '12345', 'manager', 'Pabna'),
(5, 'pranto', 'pranto123', 'pranto@gmail.com', '0152120192', '123-456-789', 'Male', '12345', 'manager', 'Dhaka'),
(6, 'sadat', 'admin2', 'sadat@gmail.com', 'N/A', '244-242-242', 'Male', '12345', 'admin', 'Ctg'),
(7, 'Oishi', 'oishi123', 'oishi@gmail.com', '0182739101', '123-456-789', 'Female', '12345', 'user', 'Maymanshing');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
