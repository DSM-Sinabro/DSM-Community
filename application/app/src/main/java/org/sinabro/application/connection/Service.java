package org.sinabro.application.connection;

import android.content.Context;

import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.http.DELETE;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;
import retrofit2.http.Query;

/**
 * Created by dsm2016 on 2017-08-09.
 */

public class Service extends APIAdapter {

    public static RestApi getRetrofit(Context context) {
        return (RestApi) retrofit(context, RestApi.class);
    }

    public interface RestApi {
        // 최신글 목록 불러오기
        @GET(APIUrl.FREE_BOARD_URL)
        Call<JsonObject> post_list();

        // 글 작성하기
        @FormUrlEncoded
        @POST(APIUrl.FREE_BOARD_URL)
        Call<Void> write_post(@Field("title") String title, @Field("contents") String contents, @Field("tags") String tags, @Field("images") String images, @Field("authorUid") String authorUid);

        // 글 수정하기
        @PUT(APIUrl.FREE_BOARD_URL)
        Call<Void> post_modify (@Path("articleId") String articleId, @Field("title") String title, @Field("contents") String contents, @Field("tags") String tags, @Field("images") String images, @Field("user") String user);

        // 글 삭제하기
        @DELETE(APIUrl.FREE_BOARD_URL)
        Call<Void> post_delete (@Path("articleId") String articleId);

        // 글 읽어오기
        @GET(APIUrl.FREE_BOARD_URL)
        Call<Void> post_read (@Path("articleId") String articleId);
    }
}
