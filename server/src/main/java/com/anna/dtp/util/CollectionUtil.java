package com.anna.dtp.util;

import java.util.ArrayList;
import java.util.List;

public class CollectionUtil {

    private CollectionUtil() {
    }

    public static <T> List<T> iterableToList(Iterable<T> iterable) {
        List<T> list = new ArrayList<>();
        for (T t : iterable) {
            list.add(t);
        }
        return list;
    }

}
