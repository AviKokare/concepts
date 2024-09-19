public class FindFirstAndLastIndex {
    public static void main(String[] args) {
        int[] arr = { 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 9 };

        int[] ans = search_range(arr, 7);

        System.out.println(ans);
    }

    static int[] search_range(int[] arr, int target) {
        int[] ans = { -1, -1 };

        int start = search_index(arr, target, true);
        System.out.println(start);

        if (start != -1) {
            int end = search_index(arr, target, false);
            System.out.println(end);
            ans[0] = start;
            ans[1] = end;
        }

        return ans;
    }
    
    static int search_index(int[] arr, int target, boolean isFirstIndexSearching) {
        
        int start = 0;
        int end = arr.length - 1;
        int ans = -1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (target > arr[mid]) {
                start = mid + 1;
            }else if(target < arr[mid]){
                end = mid - 1;
            } else {
                ans = mid;
                if (isFirstIndexSearching) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }


        return ans;
    }
}
