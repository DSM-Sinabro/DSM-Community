package org.sinabro.application.activities;

import android.graphics.Color;
import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;

import org.sinabro.application.R;
import org.sinabro.application.adapter.IntroPagerAdapter;

public class IntroActivity extends AppCompatActivity {

    ViewPager viewPager;
    private int size = 3;
    private static int colorArray[]={Color.parseColor("#968ebd"),Color.parseColor("#009688"),Color.parseColor("#F44336")};


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intro);

        viewPager = (ViewPager) findViewById(R.id.intro_viewpager);
        viewPager.setAdapter(new IntroPagerAdapter(getSupportFragmentManager()));

        final LinearLayout view = (LinearLayout) findViewById(R.id.current_view_count);
        viewPager.setOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

            }

            @Override
            public void onPageSelected(int position) {
                Log.d("xxx", "onPageSelected: " + position);
                //setNextButtonText(position, size);
                setViewCount(view, size, position);
            }

            @Override
            public void onPageScrollStateChanged(int state) {

            }
        });

        setViewCount(view, size, 0);
    }

    public void setIconImage(final LinearLayout view) {

    }


    public void setViewCount(LinearLayout view, int count, int selectNum){
        view.removeAllViews();
        for(int i = 0;i < count;i++){
            View countView = new View(getApplicationContext());
            if(i == selectNum){
                view.setBackgroundColor(colorArray[selectNum]);
                countView.setBackground(getResources().getDrawable(R.drawable.count_view_shape_selected));
            }else{
                countView.setBackground(getResources().getDrawable(R.drawable.count_view_shape));
            }
            LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(30, 30);
            layoutParams.setMargins(8,0,8,0);
            view.addView(countView, layoutParams);
        }
    }

    public void nextButton(Button button) {
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                viewPager.setCurrentItem(viewPager.getCurrentItem() + 1, true);
            }
        });
    }




}
