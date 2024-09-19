import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        //sytax of array list

        ArrayList<Integer> arrayList = new ArrayList<Integer>();

        arrayList.add(10);
        arrayList.add(100);
        arrayList.add(1000);
        arrayList.add(1000);
        arrayList.add(10000);
        arrayList.add(100000);
        arrayList.add(1000000);
        arrayList.add(10000000);

        // System.out.println(arrayList);


        //Multi array list

        System.out.println("Multi array list");

        ArrayList<ArrayList<Integer>> multiArrayList = new ArrayList<>();

        for (int i = 0; i < 3; i++) {
            multiArrayList.add(new ArrayList<>());
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                multiArrayList.get(i).add(sc.nextInt());
            }
        }

        System.out.println(multiArrayList);
    }
}
