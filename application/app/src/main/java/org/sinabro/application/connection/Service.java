package org.sinabro.application.connection;

import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.POST;

/**
 * Created by dsm2016 on 2017-08-09.
 */

public interface Service {
    int HTTP_SUCCESS = 200;

    String SERVER_URL="";

    //add url
    @POST("")
    Call<Void> login(@Field("id") String id,@Field("password") String password);
}
