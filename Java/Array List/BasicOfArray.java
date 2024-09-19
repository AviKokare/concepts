import java.util.Scanner;

public class BasicOfArray {
    public static void main(String[] args) {
        //Syntax of Array
        /*
         * data_type[] variable_name = new data_type[size_of_array];
         * ex. int[] roll_number = new int[5] or nt[] roll_number = {10,20,30,40,50}
         * 
         */

        Scanner in = new Scanner(System.in);

        System.out.println("Please enter the size of array : ");
        int sizeOfArray = in.nextInt();
        int[] arr = new int[sizeOfArray];

        System.out.println("Please enter the number : ");

        for (int i = 0; i < sizeOfArray; i++) {
            int ele = in.nextInt();
            arr[i] = ele;
        }
        
        for (int i = 0; i < sizeOfArray; i++) {
            System.out.println(arr[i]);
        }
    }
}