package baekjoon.A_StepByStep.G_string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class G_05_1157_wordStudy {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String text = br.readLine().toUpperCase();
        int[] countArray = new int[26];

        setCharCount(text, countArray);
        char ch = getMaxCountChar(countArray);

        System.out.println(ch);
    }

    private static char getMaxCountChar(int[] countArray) {
        int maxCount = -1;
        char ch = '?';

        for (int i = 0; i < countArray.length; i++) {
            if (countArray[i] > maxCount) {
                maxCount = countArray[i];
                ch = (char) (i + 'A');
            } else if (countArray[i] == maxCount) {
                ch = '?';
            }
        }
        return ch;
    }

    private static void setCharCount(String text, int[] countArray) {
        for (int i = 0; i < text.length(); i++) {
            countArray[text.charAt(i) - 'A']++;
        }
    }
}
