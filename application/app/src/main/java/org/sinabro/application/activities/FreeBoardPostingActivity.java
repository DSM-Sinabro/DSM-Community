package org.sinabro.application.activities;

import android.Manifest;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.media.ExifInterface;
import android.media.Image;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.nex3z.flowlayout.FlowLayout;

import org.sinabro.application.R;
import org.sinabro.application.connection.Service;

import java.io.IOException;
import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by parktaeim on 2017. 8. 13..
 */

public class FreeBoardPostingActivity extends AppCompatActivity {

    private int CAMERA_CODE =1;
    private int GALLERY_CODE =2;
    ImageView contentImg;
    private ArrayList<Bitmap> imageList = new ArrayList<>();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_postingpage);

        ImageView back_icon = (ImageView) findViewById(R.id.back_icon);
        back_icon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });


        posting();
        setInToolbar();

    }

    private void posting() {
        ImageView checkIcon = (ImageView) findViewById(R.id.check_icon);
        final EditText titleEdit = (EditText) findViewById(R.id.posting_titleEditText);
        final EditText contentEdit = (EditText) findViewById(R.id.posting_content_EditText);

        checkIcon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Service.getRetrofit(getApplicationContext()).write_post(titleEdit.getText().toString(),contentEdit.getText().toString(),"It is tag","images","uid").enqueue(new Callback<Void>() {
                    @Override
                    public void onResponse(Call<Void> call, Response<Void> response) {
                        Log.d("write post res code ===",String.valueOf(response.code()));
                        if(response.code() == 201){

                        }else if(response.code() == 500){
                            Toast.makeText(getApplicationContext(),"500에러 입니다.",Toast.LENGTH_SHORT).show();
                        }
                    }

                    @Override
                    public void onFailure(Call<Void> call, Throwable t) {

                    }
                });
            }
        });
    }

    private void setInToolbar() {
        ImageView photoIcon = (ImageView) findViewById(R.id.photo_icon);
        ImageView postingIcon = (ImageView) findViewById(R.id.check_icon);

        photoIcon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                CharSequence photoOptions[] = new CharSequence[]{"앨범","카메라"};   // 다이얼로그 내용들

                AlertDialog.Builder builder = new AlertDialog.Builder(FreeBoardPostingActivity.this);
                builder.setTitle("사진 선택");  //다이얼로그 제목
                builder.setItems(photoOptions, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        switch (which){
                            case 0: //앨범
                                Intent galleryIntent = new Intent(Intent.ACTION_PICK);
                                galleryIntent.setData(MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
                                galleryIntent.setType("image/*");
                                startActivityForResult(Intent.createChooser(galleryIntent, "Select Picture"),GALLERY_CODE);
                                break;

                            case 1: //카메라
                                Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                                startActivityForResult(intent, CAMERA_CODE);
                                break;
                        }
                    }
                });
                builder.show();
            }
        });

        postingIcon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

            }
        });
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (resultCode == RESULT_OK) {
            if(requestCode==GALLERY_CODE){
                SendPicture(data);
            }else if(requestCode == CAMERA_CODE){
                SendPicture(data);
            }
        }
    }

    private void SendPicture(Intent data){
        Uri imgUri = data.getData();
        String imagePath = getRealPathFromURI(imgUri);
        Log.d("realImagePath!!!!!!!!!!",String.valueOf(imagePath));

        ExifInterface exif = null;
        try{
            exif = new ExifInterface(imagePath);
        }catch (IOException e){
            e.printStackTrace();
        }

        int exifOrientation = exif.getAttributeInt(ExifInterface.TAG_ORIENTATION, ExifInterface.ORIENTATION_NORMAL);
        int exifDegree = exifOrientationToDegrees(exifOrientation);

        contentImg = (ImageView) findViewById(R.id.posting_contentImg);
        Bitmap bitmap = BitmapFactory.decodeFile(imagePath);//경로를 통해 비트맵으로 전환
        Log.d("imagePath",imagePath.toString());
        contentImg.setImageBitmap(rotate(bitmap, exifDegree));//이미지 뷰에 비트맵 넣기

//        FlowLayout flowLayout = (FlowLayout) findViewById(R.id.flowLayout);
//        flowLayout.addView();
//        imageList.add(i,bitmap);

    }

    public Bitmap rotate(Bitmap src, float degree) {

        // Matrix 객체 생성
        Matrix matrix = new Matrix();
        // 회전 각도 셋팅
        matrix.postRotate(degree);
        // 이미지와 Matrix 를 셋팅해서 Bitmap 객체 생성
        return Bitmap.createBitmap(src, 0, 0, src.getWidth(),
                src.getHeight(), matrix, true);
    }



    public String getRealPathFromURI(Uri contentUri) {
        String[] proj = {MediaStore.Images.Media.DATA};
        Cursor cursor = getContentResolver().query(contentUri, proj, null, null, null);
        int column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
        cursor.moveToFirst();
        return cursor.getString(column_index);

    }

    public int exifOrientationToDegrees(int exifOrientation) {
        if (exifOrientation == ExifInterface.ORIENTATION_ROTATE_90) {
            return 90;
        } else if (exifOrientation == ExifInterface.ORIENTATION_ROTATE_180) {
            return 180;
        } else if (exifOrientation == ExifInterface.ORIENTATION_ROTATE_270) {
            return 270;
        }
        return 0;
    }


}