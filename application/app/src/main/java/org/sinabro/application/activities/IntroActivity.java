package org.sinabro.application.activities;

import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import org.sinabro.application.R;
import org.sinabro.application.adapter.IntroPagerAdapter;

public class IntroActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intro);

        ViewPager viewPager = (ViewPager) findViewById(R.id.intro_viewpager);
        viewPager.setAdapter(new IntroPagerAdapter(getSupportFragmentManager()));


    }
}
