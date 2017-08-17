package org.sinabro.application.activities;

import android.graphics.Color;
import android.media.Image;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.sinabro.application.R;

public class ProjectAndStudyActivity extends AppCompatActivity {

    private static String[] buttonString={"모두보기","서버","웹 프론트 엔드","안드로이드","node.js"};
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_prokect);

        TextView titleTV = (TextView) findViewById(R.id.tv_toolbar_title);
        titleTV.setText("프로젝트 스터디 모집");

        ImageView imageView=(ImageView)findViewById(R.id.ib_toolbar_back);
        imageView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        LinearLayout view=(LinearLayout)findViewById(R.id.layout_center);


        initView(view,buttonString.length);
    }

    private void initView(LinearLayout view,int count){
        view.removeAllViews();


        for (int i = 0; i < count ; i++) {

            if (i == 0) {
                View customView = LayoutInflater.from(getApplicationContext()).inflate(R.layout.button, null, false);
                Button button = customView.findViewById(R.id.plusItemButton);
                button.setBackground(getResources().getDrawable(R.drawable.round_button));
                button.setTextColor(Color.BLACK);
                button.setText(buttonString[i]);
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, 120);
                view.addView(customView, layoutParams);
            } else {
                View customView = LayoutInflater.from(getApplicationContext()).inflate(R.layout.sub_button, null, false);
                Button button = customView.findViewById(R.id.plusItemButton);
                button.setBackground(getResources().getDrawable(R.drawable.round_button));
                button.setTextColor(Color.BLACK);
                button.setText(buttonString[i]);

                customView.measure(View.MeasureSpec.UNSPECIFIED, View.MeasureSpec.UNSPECIFIED);
                int width =button.getWidth();

                Log.d("----------",String.valueOf(width));
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(width, 120);
                view.addView(customView, layoutParams);
            }

        }
    }
}






