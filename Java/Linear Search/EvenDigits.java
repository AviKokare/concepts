public class EvenDigits {
    public static void main(String[] args) {
        int[] arr = { 555, 901, 482, 1771, 0 };

        int number = 12232;
        int res = check_even_count_of_digit(number);

        System.out.println("Result: " + res);

    }

    //----------------------------------------------------------------

    // Solution 1

    // static int check_even_count_of_digit(int[] arr) {

    //     int event_count = 0;
    //     if (arr.length == 0) {
    //         return 0;
    //     }

    //     for (int i = 0; i < arr.length; i++) {
    //         if (even_count(arr[i])) {
    //             event_count++;
    //         }
    //     }

    //     return event_count;
    // }

    // static boolean even_count(int ele) {

    //     int digit_count = 0;
    //     int num = ele;
    //     if (num < 0) {
    //         num = num * -1;
    //     }

    //     if (num == 0) {
    //         digit_count = 1;
    //     }

    //     while (num > 0) {
    //         digit_count++;
    //         num = num / 10;
    //     }

    //     return digit_count % 2 == 0;
    // }

    // ----------------------------------------------------------------


    // ----------------------------------------------------------------

    //Soution 2

    // static int get_even_digits(int[] arr) {
    //     if (arr.length == 0) {
    //         return 0;
    //     }

    //     int even_count = 0;

    //     for (int i = 0; i < arr.length; i++) {
    //         int num = arr[i];
    //         int counter = 0;

    //         if (num < 0) {
    //             num = num * -1;
    //         }

    //         while (num > 0) {
    //             counter++;
    //             num = num / 10;
    //         }

    //         if (counter % 2 == 0) {
    //             even_count++;
    //         }
    //     }

    //     return even_count;
    // }
    
    //----------------------------------------------------------------

    //----------------------------------------------------------------

    //Solution 3

    static int check_even_count_of_digit(int number) {
        if (number < 0) {
            number = -number;
        }

        return (int) (Math.log10(number)) + 1;
    }
}
