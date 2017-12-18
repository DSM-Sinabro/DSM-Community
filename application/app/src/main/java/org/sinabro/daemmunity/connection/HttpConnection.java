package org.sinabro.daemmunity.connection;

import android.content.Context;


import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by dsm2016 on 2017-08-09.
 */

public class HttpConnection {
    private static OkHttpClient client;

    public static Service getInstance(Context context){


        if(client==null){
            client=new OkHttpClient.Builder()
            .build();
        }

        return new Retrofit.Builder()
                .baseUrl(Service.SERVER_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build()
                .create(Service.class);
    }
}
