public class Main {
    public static void main(String[] args) {
        // 1. Un secret en clair (Erreur de sécurité)
        String password = "admin_password_123"; 

        // 2. Une variable qui ne sert à rien (Code Smell)
        int variableInutile = 10; 

        System.out.println("Test Issues");
    }
}