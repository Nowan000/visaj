-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 15 sep. 2021 à 15:34
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `visaj`
--

-- --------------------------------------------------------

--
-- Structure de la table `carts`
--

CREATE TABLE `carts` (
  `id_cart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `carts`
--

INSERT INTO `carts` (`id_cart`) VALUES
(1);

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_type` varchar(55) NOT NULL,
  `cart_product_id` int(11) DEFAULT NULL,
  `product_image` text NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id_product`, `product_name`, `product_type`, `cart_product_id`, `product_image`, `product_price`, `product_description`) VALUES
(1, 'Perruque Daenerys Targaryen', 'perruque', 1, 'https://litb-cgis.rightinthebox.com/images/640x640/202011/hrspym1605704568540.jpg', 22, 'Longue perruque blonde ondulée bouclée pour fête costumée et utilisation quotidienne mère des dragons'),
(2, 'Perruque Hocus Pocus', 'perruque', NULL, 'https://litb-cgis.rightinthebox.com/images/640x640/202009/jmffsc1600946881494.jpg?fmt=webp&v=1', 17, 'Perruque Winifred Sanderson Hocus Pocus boucles serrées, rouge foncé de longueur moyenne'),
(3, 'Perruque Cruella', 'perruque', NULL, 'https://litb-cgis.rightinthebox.com/images/640x640/202107/bps/product/inc/oudahd1625119239511.jpg?fmt=webp&v=1', 13, 'Perruque blanche et noire Cruella Denfert, carré'),
(4, 'Perruque la Petite Sirène\r\n', 'perruque', NULL, 'https://litb-cgis.rightinthebox.com/images/640x640/202108/bps/product/inc/dlovkw1627898107548.jpg?fmt=webp&v=1', 17, 'Perruque dela petite sirène, ariel, longue, rouge'),
(6, 'Perruque Daphné Scooby Doo', 'perruque', NULL, 'https://litb-cgis.rightinthebox.com/images/640x640/202108/bps/product/inc/nnjfnt1627898070852.jpg?fmt=webp&v=1', 22, 'Perruque longue ondulée bouclée synthétique, orange avec frange'),
(7, 'Pride Cils ', 'faux cils', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-max/pride-cils--mw-109488-1.jpg', 7, 'Cils sexy avec cils individuels extrêmement longs'),
(8, 'Tropical cils', 'faux cils', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-max/tropical-cils--mw-109617-1.jpg', 11, 'Grands cils-plumes à pois orange'),
(9, 'Hélène Cils ', 'faux cils', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-max/helene-cils--mw-109522-1.jpg', 7, 'Cils verts extrêmement glamour'),
(10, 'Habanera Cils', 'faux cils', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-max/habanera-cils--mw-109632-1.jpg', 9, 'Cils à pois roses et noirs en plumes véritables'),
(11, 'Perruque Harley Quinn Suicide Squad™ ', 'perruque', NULL, 'https://cdn.deguisetoi.fr/images/rep_art/gra/238/4/238486/perruque-harley-quinn-suicide-squad-femme_238486_2.jpg', 24, 'Perruque avec deux couettes sur le côté rose et bleue.'),
(12, 'Tatouage Bandit', 'tatouage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/bandit-manches-de-peau-tatouee--mw-103477-1.jpg', 10, 'Manches de peau tatouée Bandit'),
(13, 'Tribal tatouage', 'tatouage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/tribal-manches-de-peau-tatouee--mw-102818-1.jpg', 12, 'Manches de peau tatouée Tribal'),
(14, 'Gangsta tatouage', 'tatouage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/gangsta-manches-de-peau-tatouee--mw-102815-1.jpg', 11, 'Manches de peau tatouée Gangsta'),
(15, 'Skater tatouage', 'tatouage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/manche-peau-tatouee-skater--mw-105127-1.jpg', 13, 'Manche peau tatouée skater '),
(16, 'Dents de vampire ', 'dents', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/dents-de-vampire-fx--mw-131265-3.jpg', 20, 'Dents de vampire FX quatre pièces'),
(17, 'Dents de bête ', 'dents', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/teeth-fx-dents-de-bete--mw-131267-3.jpg', 23, 'Dents de bête quatre pièces'),
(18, 'Dents de loup-garou', 'dents', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/teeth-fx-dents-de-loup-garou--mw-131263-3.jpg', 21, 'Dents de loup-garou quatre pièces'),
(19, 'Dents de monstre ', 'dents', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/teeth-fx-dents-de-monstre--mw-131262-3.jpg', 22, 'Dents de monstre quatre pièces'),
(20, 'Kit maquillage diable ', 'kit maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/kit-maquillage-diable--mw-104650-1.jpg', 20, 'Kit maquillage diable sept pièces (crème, corne, colle, lentilles de contact)\r\n    '),
(21, 'Kit maquillage clown effrayant ', 'kit maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/kit-maquillage-clown-effrayant--mw-104651-1.jpg', 25, 'Kit maquillage clown effrayant cinq pièces (crème, nez, lentilles de contact)'),
(22, 'Kit vampire Deluxe ', 'kit maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/kit-vampire-deluxe--mw-104546-1.jpg', 50, 'Kit vampire Deluxe (crème, front, joues, dents, colle, peau, sang)'),
(23, 'Kit maquillage zombie ', 'kit maquillage', 1, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/kit-maquillage-zombie--mw-104648-1.jpg', 15, 'Kit maquillage zombie six pièces (crème, peau, croute, lentille sde contact)'),
(24, 'Lentilles de contact berserk ', 'lentilles', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/lentilles-de-contact-berserk--mw-130320-1.jpg', 15, 'Une paire de lentilles de contact infecté sans correction'),
(25, 'Lentilles de contact Félin jaunes ', 'lentilles', 1, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/lentilles-de-contact-predateur-jaunes--mw-117331-1.jpg', 17, 'Une paire de lentilles de contact prédateur jaune sans correction'),
(26, 'Lentilles de contact Uruk-hai ', 'lentilles', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/lentilles-de-contact-uruk-hai--mw-117327-1.jpg', 13, 'Une paire de lentilles de contact Uruk-hai sans correction'),
(27, 'Lentilles de contact Sclera rouges ', 'lentilles', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/lentilles-de-contact-sclera-rouges--mw-118563-1.jpg', 59, 'Une paire de lentilles de contact Sclera rouges sans correction'),
(28, 'Peau effet spécial horreur ', 'maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/peau-effet-special-horreur--101579-horror-skin-haut-fake-skin.jpg', 4, 'Flacon peau effets spéciaux horreur'),
(29, 'Scary Skin vert ', 'accessoire maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/scary-skin-vert--mw-100031-1.jpg', 4, 'Un tube de Scary Skin vert'),
(30, 'Gel graves blessures', 'accessoire maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/gel-effet-special-%C2%AB-gelafix-%C2%BB--mw-109995-2.jpg', 10, 'Gelafix Kryolan couleur neutre '),
(31, 'Peau de zombie ', 'accessoire maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/prothese-en-latex-blessure-de-zombie--mw-104619-1.jpg', 12, 'Prothèse en latex blessure de zombie trois pièces (prothèse, colle, sang)'),
(32, 'Crème maquillage de clown ', 'accessoire maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/creme-maquillage-de-clown--mw-104605-1.jpg', 6, 'Pot de 4 couleurs de maquillage clown'),
(33, 'Crème de maquillage océan', 'accessoire maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/maquillage-ocean-boite-a-maquillage--mw-104526-1.jpg', 6, 'Pot de 4 couleurs de maquillage océan'),
(34, 'Crème maquillage monstre', 'accessoire maquillage', NULL, 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/maquillage-monstre-boite-a-maquillage--mw-100367-1.jpg', 8, 'Pot de 4 couleurs de maquillage monstre');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `user_firstname` varchar(55) NOT NULL,
  `user_lastname` varchar(55) NOT NULL,
  `user_email` varchar(55) NOT NULL,
  `user_password` varchar(55) NOT NULL,
  `cart_user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `user_firstname`, `user_lastname`, `user_email`, `user_password`, `cart_user_id`) VALUES
(1, 'Tom', 'Pecheux', 'tompecheux@aol.fr', 'blabla', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id_cart`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `cart_product_id` (`cart_product_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `cart_user_id` (`cart_user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `carts`
--
ALTER TABLE `carts`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cart_product_id`) REFERENCES `carts` (`id_cart`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`cart_user_id`) REFERENCES `carts` (`id_cart`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
