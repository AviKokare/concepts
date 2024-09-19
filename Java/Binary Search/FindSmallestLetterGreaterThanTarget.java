//leetcode problem number - 744
public class FindSmallestLetterGreaterThanTarget {
    public static void main(String[] args) {
        char[] letters = { 'e', 'e', 'g', 'g' };

        char target = 'e';

        char result = nextGreatestLetter(letters, target);

        System.out.println("Result: " + result);

    }
    
    static char nextGreatestLetter(char[] letters, char target) {
        int start = 0;
        int end = letters.length - 1;

        while (start <= end) {
            int mid = (start + end) / 2;
            if (letters[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return letters[start%letters.length];
    }
}