import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int input = sc.nextInt();

        switch (input) {
            case 1:
                System.out.println("1");
                break;
            case 2: 
                System.out.println("2");
                break;
        }
    }
}