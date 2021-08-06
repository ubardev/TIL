package baekjoon.G_string;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class G_07_2908_sangsu {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        String firstNumber = st.nextToken();
        String secondNumber = st.nextToken();
        StringBuffer sb = new StringBuffer(firstNumber);
        firstNumber = sb.reverse().toString();
        sb = new StringBuffer(secondNumber);
        secondNumber = sb.reverse().toString();

        int firstNumberToInteger = Integer.parseInt(firstNumber);
        int secondNumberToInteger = Integer.parseInt(secondNumber);

        if (firstNumberToInteger > secondNumberToInteger)
            System.out.println(firstNumberToInteger);
        else
            System.out.println(secondNumberToInteger);

    }
}
