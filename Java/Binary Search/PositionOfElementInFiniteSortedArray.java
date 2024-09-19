public class PositionOfElementInFiniteSortedArray {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        int result = ans(arr, 8);

        System.out.println(result);

    }

    static int ans(int[] arr, int target) {
        int start = 0;
        int end = 1;

        while (arr[end] < target) {

            int new_start = end + 1;

            // new end = previous end + (size of the box * 2)
            end = end + (end - start + 1) * 2;

            start = new_start;
            if (end >= arr.length) {
                end = arr.length - 1;

                if (target > arr[arr.length - 1]) {
                    return -1;
                }
            }
            
        }

        
        
        return binary_search(arr, target, start, end);
    }
    
    static int binary_search(int[] arr, int target, int start, int end) {

        while (start <= end) {
            int mid = (start + end) / 2;
            
            if (arr[mid] > target) {
                end = mid - 1;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
