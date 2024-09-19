public class PeakIndexInMountainArray {

    public static void main(String[] args) {
        int[] arr = { 0, 10, 5, 2 };

        int res = peak_index_in_mountain(arr);
        System.out.println(res);
    }
    
    static int peak_index_in_mountain(int[] arr) {
        int start = 0;
        int end = arr.length - 1;

        while (start < end) {
            int mid = start + (end - start) / 2;

            if (arr[mid] > arr[mid + 1]) {
                end = mid;
            } else{
                start = mid + 1;
            }
        }

        return start;
    }
}