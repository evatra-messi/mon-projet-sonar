function verifConnexion(user) {
    // Alerte : Mot de passe en clair (Vulnérabilité)
    var password = "admin_password_123"; 

    if (user == "admin") {
        return true;
    }

    // Alerte : Code mort (ne sera jamais atteint)
    return false;
    console.log("Tentative de connexion"); 
}

Enregistre ce fichier