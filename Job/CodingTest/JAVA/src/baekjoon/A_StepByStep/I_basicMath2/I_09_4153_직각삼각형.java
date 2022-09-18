package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class I_09_4153_직각삼각형 {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder stringBuilder = new StringBuilder();
        String inputData;
        StringTokenizer stringTokenizer;
        int x;
        int y;
        int z;

        while (true) {
            inputData = bufferedReader.readLine();
            if (inputData.equals("0 0 0")) break;

            stringTokenizer = new StringTokenizer(inputData, " ");

            x = Integer.parseInt(stringTokenizer.nextToken());
            y = Integer.parseInt(stringTokenizer.nextToken());
            z = Integer.parseInt(stringTokenizer.nextToken());

            if (x * x == (y * y + z * z))
                stringBuilder.append("right").append('\n');
            else if (y * y == (x * x + z * z))
                stringBuilder.append("right").append('\n');
            else if (z * z == (x * x + y * y))
                stringBuilder.append("right").append('\n');
            else
                stringBuilder.append("wrong").append('\n');
        }

        System.out.println(stringBuilder);
    }
}
