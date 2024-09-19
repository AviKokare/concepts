public class DescendingOrderBinarySearch {
    public static void main(String[] args) {
        int[] arr = { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0};

        int result = binary_search(arr, 1);

        System.out.println("Result: " + result);
    }

    static int binary_search(int[] arr, int target) {

        if (arr.length == 0) {
            return -1;
        }

        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = (start + end) / 2;
            
            if (arr[mid] > target) {
                start = mid + 1;
            } else if (arr[mid] < target) {
                end = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
