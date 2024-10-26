-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2024 at 02:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `care-connect`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_records`
--

CREATE TABLE `activity_records` (
  `activity_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `activity_type_id` int(11) NOT NULL,
  `started_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `duration_minutes` int(11) NOT NULL,
  `distance_meters` int(11) DEFAULT NULL,
  `steps_count` int(11) DEFAULT NULL,
  `calories_burned` int(11) DEFAULT NULL,
  `average_heart_rate` int(11) DEFAULT NULL,
  `intensity_level` varchar(50) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `activity_types`
--

CREATE TABLE `activity_types` (
  `activity_type_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `met_value` decimal(4,2) DEFAULT NULL,
  `is_cardio` tinyint(1) DEFAULT NULL,
  `is_strength` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `activity_types`
--

INSERT INTO `activity_types` (`activity_type_id`, `name`, `met_value`, `is_cardio`, `is_strength`, `created_at`) VALUES
(1, 'Walking', 3.50, 1, 0, '2024-10-26 00:00:58'),
(2, 'Running', 8.00, 1, 0, '2024-10-26 00:00:58'),
(3, 'Cycling', 7.00, 1, 0, '2024-10-26 00:00:58'),
(4, 'Weight Training', 5.00, 0, 1, '2024-10-26 00:00:58'),
(5, 'Swimming', 6.00, 1, 0, '2024-10-26 00:00:58'),
(6, 'Yoga', 3.00, 0, 1, '2024-10-26 00:00:58'),
(7, 'HIIT', 8.50, 1, 1, '2024-10-26 00:00:58');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `AppointmentID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `DoctorID` int(11) DEFAULT NULL,
  `AppointmentDate` datetime DEFAULT NULL,
  `Purpose` varchar(255) DEFAULT NULL,
  `Status` enum('Scheduled','Completed','Cancelled') DEFAULT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `UpdatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `DoctorID` int(11) NOT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Specialty` varchar(100) DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `ClinicName` varchar(100) DEFAULT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `health_analyses`
--

CREATE TABLE `health_analyses` (
  `analysis_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `analyzed_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `analysis_type` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `summary` text NOT NULL,
  `recommendations` text DEFAULT NULL,
  `metrics_snapshot` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metrics_snapshot`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `health_goals`
--

CREATE TABLE `health_goals` (
  `goal_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `goal_type` varchar(100) NOT NULL,
  `target_value` decimal(10,2) NOT NULL,
  `start_date` date NOT NULL,
  `target_date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT 'active',
  `achieved_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nutrition_logs`
--

CREATE TABLE `nutrition_logs` (
  `log_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `logged_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `meal_type` varchar(50) DEFAULT NULL,
  `total_calories` int(11) DEFAULT NULL,
  `proteins_grams` decimal(6,2) DEFAULT NULL,
  `carbs_grams` decimal(6,2) DEFAULT NULL,
  `fats_grams` decimal(6,2) DEFAULT NULL,
  `fiber_grams` decimal(6,2) DEFAULT NULL,
  `water_ml` int(11) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sleep_records`
--

CREATE TABLE `sleep_records` (
  `sleep_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `sleep_start` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sleep_end` varchar(255) NOT NULL,
  `duration_minutes` int(11) GENERATED ALWAYS AS (timestampdiff(MINUTE,`sleep_start`,`sleep_end`)) STORED,
  `quality_score` int(11) DEFAULT NULL CHECK (`quality_score` between 1 and 10),
  `deep_sleep_minutes` int(11) DEFAULT NULL,
  `rem_sleep_minutes` int(11) DEFAULT NULL,
  `light_sleep_minutes` int(11) DEFAULT NULL,
  `interruptions` int(11) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `height_cm` decimal(5,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vital_measurements`
--

CREATE TABLE `vital_measurements` (
  `measurement_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `measured_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `heart_rate` int(11) DEFAULT NULL,
  `blood_pressure_systolic` int(11) DEFAULT NULL,
  `blood_pressure_diastolic` int(11) DEFAULT NULL,
  `temperature` decimal(4,2) DEFAULT NULL,
  `oxygen_saturation` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `weight_measurements`
--

CREATE TABLE `weight_measurements` (
  `measurement_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `measured_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `weight_kg` decimal(5,2) NOT NULL,
  `body_fat_percentage` decimal(4,2) DEFAULT NULL,
  `muscle_mass_kg` decimal(5,2) DEFAULT NULL,
  `bmi` decimal(4,2) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_records`
--
ALTER TABLE `activity_records`
  ADD PRIMARY KEY (`activity_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `activity_type_id` (`activity_type_id`);

--
-- Indexes for table `activity_types`
--
ALTER TABLE `activity_types`
  ADD PRIMARY KEY (`activity_type_id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`AppointmentID`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`DoctorID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `health_analyses`
--
ALTER TABLE `health_analyses`
  ADD PRIMARY KEY (`analysis_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `health_goals`
--
ALTER TABLE `health_goals`
  ADD PRIMARY KEY (`goal_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `nutrition_logs`
--
ALTER TABLE `nutrition_logs`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sleep_records`
--
ALTER TABLE `sleep_records`
  ADD PRIMARY KEY (`sleep_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `vital_measurements`
--
ALTER TABLE `vital_measurements`
  ADD PRIMARY KEY (`measurement_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `weight_measurements`
--
ALTER TABLE `weight_measurements`
  ADD PRIMARY KEY (`measurement_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_records`
--
ALTER TABLE `activity_records`
  MODIFY `activity_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `activity_types`
--
ALTER TABLE `activity_types`
  MODIFY `activity_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `AppointmentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `DoctorID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `health_analyses`
--
ALTER TABLE `health_analyses`
  MODIFY `analysis_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `health_goals`
--
ALTER TABLE `health_goals`
  MODIFY `goal_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nutrition_logs`
--
ALTER TABLE `nutrition_logs`
  MODIFY `log_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sleep_records`
--
ALTER TABLE `sleep_records`
  MODIFY `sleep_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vital_measurements`
--
ALTER TABLE `vital_measurements`
  MODIFY `measurement_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `weight_measurements`
--
ALTER TABLE `weight_measurements`
  MODIFY `measurement_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_records`
--
ALTER TABLE `activity_records`
  ADD CONSTRAINT `activity_records_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `activity_records_ibfk_2` FOREIGN KEY (`activity_type_id`) REFERENCES `activity_types` (`activity_type_id`);

--
-- Constraints for table `health_analyses`
--
ALTER TABLE `health_analyses`
  ADD CONSTRAINT `health_analyses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `health_goals`
--
ALTER TABLE `health_goals`
  ADD CONSTRAINT `health_goals_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `nutrition_logs`
--
ALTER TABLE `nutrition_logs`
  ADD CONSTRAINT `nutrition_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `sleep_records`
--
ALTER TABLE `sleep_records`
  ADD CONSTRAINT `sleep_records_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `vital_measurements`
--
ALTER TABLE `vital_measurements`
  ADD CONSTRAINT `vital_measurements_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `weight_measurements`
--
ALTER TABLE `weight_measurements`
  ADD CONSTRAINT `weight_measurements_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
