public class LinearSearchString {
    public static void main(String[] args) {
        String str = "Avinash";

        char target = 'A';

        boolean result = linear_search(str, target);

        System.out.println("Result is " + result);

    }
    
    static boolean linear_search(String str, char target) {
        if (str.length() == 0) {
            return false;
        }

        // for (int i = 0;i<str.length();i++) {
        //     if (str.charAt(i) == target) {
        //         return true;
        //     }
        // }

        for (char c : str.toCharArray()) {
            if(c == target) return true;
        }
        return false;

    }
}
