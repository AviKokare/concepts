public class SearchInRange {
    public static void main(String[] args) {

        int[] arr = {1,2,3,4,5,6};
        boolean res = search_in_range(arr, 8, 7, 6);

        System.out.println(res);
    }
    
    static boolean search_in_range(int[] arr, int start, int end, int target) {
        if (arr.length == 0) {
            return false;
        }

        for (int i = start; i < end; i++) {
            if (target == arr[i]) {
                return true;
            }
        }

        return false;
    }
}
