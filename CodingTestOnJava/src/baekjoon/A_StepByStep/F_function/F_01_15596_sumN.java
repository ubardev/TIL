package baekjoon.F_function;

public class F_01_15596_sumN {
    public long sum(int[] a) {
        long result = 0;

        for (int i = 0; i < a.length; i++) {
            result += a[i];
        }

        return result;
    }
}
