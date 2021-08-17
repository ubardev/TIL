package baekjoon.G_string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class G_04_2675_repeatString {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int testCaseCount = Integer.parseInt(br.readLine());
        StringTokenizer st;

        for (int i = 0; i < testCaseCount; i++) {
            st = new StringTokenizer(br.readLine());
            int repeatCount = Integer.parseInt(st.nextToken());
            String text = st.nextToken();
            printRepeatText(repeatCount, text);
        }
    }

    private static void printRepeatText(int repeatCount, String text) {
        for (int i = 0; i < text.length(); i++) {
            for (int j = 0; j < repeatCount; j++) {
                System.out.print(text.charAt(i));
            }
        }
        System.out.println();
    }
}
