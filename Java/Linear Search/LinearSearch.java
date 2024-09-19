import java.util.Scanner;

public class LinearSearch {
    public static void main(String[] args) {
        System.out.println("Hello World !");

        Scanner sc = new Scanner(System.in);

        int[] arr = new int[10];

        System.out.println("Enter the elements : ");
        for (int i = 0; i < 10; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.println("Enter the elements to be search : ");
        int ele = sc.nextInt();

        int output = linear_search(arr, ele);
        System.out.println("Result is : " + output);
    }

    static int linear_search(int[] arr, int ele) {

        if (arr.length == 0) {
            return -1;
        }
  
        for (int i : arr) {
            if (arr[i] == ele) {
                return i;
            }
        }

        return -1;
    }
}