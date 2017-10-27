package org.sinabro.application.activities;

import android.content.DialogInterface;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.ExifInterface;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;

import org.sinabro.application.R;
import java.io.IOException;

/**
 * Created by parktaeim on 2017. 8. 13..
 */

public class FreeBoardPostingActivity extends AppCompatActivity {

    private int CAMERA_CODE =1;
    private int GALLERY_CODE =2;

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

        setInToolbar();
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


//    //카메라 아이콘 누르면 이미지 선택 다이얼로그
//    //다이얼로그에 앨범, 카메라
//    @Override
//    public boolean OnClick(MenuItem item) {
//        //뒤로가기
//        if (item.getItemId() == android.R.id.home) {
//            finish();
//            return true;
//        }
//
//        switch (item.getItemId()) {
//            case R.id.photo_icon:  //카메라 아이콘 무르면 다이얼로그
//                CharSequence photoOptions[] = new CharSequence[]{"앨범","카메라"};   // 다이얼로그 내용들
//
//                AlertDialog.Builder builder = new AlertDialog.Builder(this);
//                builder.setTitle("사진 선택");  //다이얼로그 제목
//                builder.setItems(photoOptions, new DialogInterface.OnClickListener() {
//                    @Override
//                    public void onClick(DialogInterface dialog, int which) {
//                        switch (which){
//                            case 0: //앨범
//                                Intent galleryIntent = new Intent(Intent.ACTION_PICK);
//                                galleryIntent.setData(MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
//                                galleryIntent.setType("image/*");
//                                startActivityForResult(Intent.createChooser(galleryIntent, "Select Picture"),GALLERY_CODE);
//                                break;
//
//                            case 1: //카메라
//                                Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
//                                startActivityForResult(intent, CAMERA_CODE);
//                                break;
//                        }
//                    }
//                });
//                builder.show();
//                return true;
//
//            default:
//                return super.onOptionsItemSelected(item);
//        }
//
//
//    }

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
        ExifInterface exif = null;
        try{
            exif = new ExifInterface(imagePath);
        }catch (IOException e){
            e.printStackTrace();
        }

        int exifOrientation = exif.getAttributeInt(ExifInterface.TAG_ORIENTATION, ExifInterface.ORIENTATION_NORMAL);
        int exifDegree = exifOrientationToDegrees(exifOrientation);

        Bitmap bitmap = BitmapFactory.decodeFile(imagePath);//경로를 통해 비트맵으로 전환
//        iv_receipt.setImageBitmap(rotate(bitmap, exifDegree));//이미지 뷰에 비트맵 넣기


    }

    public String getRealPathFromURI(Uri contentUri) {
        String[] proj = {MediaStore.Images.Media.DATA};
        Cursor cursor = managedQuery(contentUri, proj, null, null, null);
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