public class RichestCustomerWealth {
    public static void main(String[] args) {
        int[][] arr = {
                { 1, 5 },
                { 7, 3 },
                { 3, 5 }
        };

        int res = richest_wealth(arr);

        System.out.println("Result: " + res);

    }
    
    static int richest_wealth(int[][] arr) {
        
        if (arr.length == 0) {
            return 0;
        }

        int max_wealth = 0;
        for (int i = 0; i < arr.length; i++) {
            int wealth = 0;
            for (int j = 0; j < arr[i].length; j++) {
                wealth += arr[i][j];
            }

            if (wealth > max_wealth) {
                max_wealth = wealth;
            }
        }
        
        return max_wealth;
    }
    

}
