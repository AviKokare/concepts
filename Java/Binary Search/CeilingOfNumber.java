//[2,3,5,9,14,16] in the given array from out the ceiling of the target number. Target = 14
//Output = 14

//Brute force approach

public class CeilingOfNumber {
    public static void main(String[] args) {
        int[] arr = { 2, 3, 5, 9, 14, 16 };

        int result = ceiling_of_number(arr, 70);

        System.out.println("result = " + result);
    }

    //brute force approach
    // static int ceiling_of_number_brute_force(int[] arr, int target) {
        // if (arr.length == 0) {
        //     return -1;
        // }

    //     for (int i = 0; i < arr.length; i++) {
    //         if (arr[i] >= target) {
    //             return arr[i];
    //         }
    //     }
    //     return -1;
    // }

    static int ceiling_of_number(int[] arr, int target) {

        if (arr.length == 0) {
            return -1;
        }

        if (target > arr[arr.length - 1]) {
            return -1;
        }
        int start = 0;
        int end = arr.length - 1;
        

        while (start <= end) {
            int mid = (start + end) / 2;

            if (arr[mid] == target) {
                return target;
            }
            if (arr[mid] > target) {
                end = mid - 1;
            } else if (arr[mid] < target) {
                start = mid + 1;
            }
        }
        return arr[start];
    }
}