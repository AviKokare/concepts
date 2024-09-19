public class OrderAgnosticBinarySearch {
    public static void main(String[] args) {
        // int[] arr = { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };

        int[] arr = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        int result = binary_search(arr, 1);

        System.out.println("Result: " + result);
    }

    static int binary_search(int[] arr, int target) {

        if (arr.length == 0) {
            return -1;
        }

        int start = 0;
        int end = arr.length - 1;

        boolean isAsc = arr[start] < arr[arr.length - 1];

        while (start <= end) {
            int mid = (start + end) / 2;

            if (arr[mid] == target) {
                return mid;
            }

            if (isAsc) {
                if (arr[mid] > target) {
                    end = end - 1;
                } else if (arr[mid] < target) {
                    start = mid + 1;
                }
            } else {
                if (arr[mid] > target) {
                    start = mid + 1;
                } else if (arr[mid] < target) {
                    end = mid - 1;
                }
            }
        }

        return -1;
    }
}
