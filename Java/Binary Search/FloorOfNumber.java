public class FloorOfNumber {
    public static void main(String[] args) {
        int[] arr = { 2, 3, 5, 9, 14, 16 };

        int result = floor_of_number(arr, 1);

        System.out.println("result = " + result);
    }

    static int floor_of_number(int[] arr, int target) {

        if (arr.length == 0) {
            return -1;
        }

        if (target < arr[0]) {
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
        return arr[end];
    }
}
