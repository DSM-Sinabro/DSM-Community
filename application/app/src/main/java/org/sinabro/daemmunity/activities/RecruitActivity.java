package org.sinabro.daemmunity.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;

import org.sinabro.daemmunity.AddRecruitDialog;
import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.RecyclerViewOnClickListener;
import org.sinabro.daemmunity.adapter.ListRecyclerViewAdapter;
import org.sinabro.daemmunity.model.ProjectItem;

import java.util.ArrayList;

/**
 * Created by user on 2017-11-07.
 */

public class RecruitActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private RecyclerView.Adapter adapter;
    private RecyclerView.LayoutManager manager;
    private RecyclerViewOnClickListener mListener;
    private FloatingActionButton addBtn;

    private ArrayList<ProjectItem> items;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recruit_list);

        recyclerView = (RecyclerView) findViewById(R.id.contestRecyclerView);
        recyclerView.hasFixedSize();
        manager = new LinearLayoutManager(getApplicationContext(), LinearLayoutManager.VERTICAL, false);
        manager.hasFocus();
        recyclerView.setLayoutManager(manager);

        final int statusNum = getIntent().getIntExtra("statusNum", 0);

        getData(statusNum);

        addBtn = (FloatingActionButton) findViewById(R.id.addListBtn);
        addBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(RecruitActivity.this, AddRecruitDialog.class);
                intent.putExtra("statusNum", statusNum);
                startActivity(intent);
            }
        });
        Log.d("life cycle", "onCreate");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d("life cycler", "onStart");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d("life cycle", "onStop");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d("life cycle", "onResume");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d("life cycle", "onRestart");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d("life cycle", "onPause");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d("life cycle", "onDestroy");
    }

    public void getData(int statusNum) {
        items = new ArrayList<>();

        ProjectItem item1 = new ProjectItem(getResources().getString(R.string.long_text),
                "title",
                "user name",
                "date",
                "views",
                "https://kpopinfo114.files.wordpress.com/2016/07/hashswan-e1469337966671.jpg",
                "position");
        items.add(item1);
        ProjectItem item2 = new ProjectItem("dummy data",
                "title",
                "user name",
                "date",
                "views",
                "http://img.insight.co.kr/static/2017/08/05/700/irtc33cnqa6mz82a5b74.jpg",
                "position");
        items.add(item2);
        ProjectItem item3 = new ProjectItem(getResources().getString(R.string.long_text),
                "title",
                "user name",
                "date",
                "views",
                "https://kpopinfo114.files.wordpress.com/2016/07/hashswan-e1469337966671.jpg",
                "position");
        items.add(item3);

        adapter = new ListRecyclerViewAdapter(items, getApplicationContext(), mListener, statusNum);
        recyclerView.setAdapter(adapter);
    }
}