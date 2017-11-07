package org.sinabro.application.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;

import org.sinabro.application.R;
import org.sinabro.application.RecyclerViewOnClickListener;
import org.sinabro.application.adapter.ContestRecyclerViewAdapter;
import org.sinabro.application.dialogs.AddContestDialog;
import org.sinabro.application.model.ProjectItem;

import java.util.ArrayList;

/**
 * Created by user on 2017-11-07.
 */

public class ClubActivity extends AppCompatActivity {
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

        getData();

        addBtn = (FloatingActionButton) findViewById(R.id.addListBtn);
        addBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(ClubActivity.this, AddContestDialog.class));
            }
        });


    }

    public void getData() {
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

        adapter = new ContestRecyclerViewAdapter(items, getApplicationContext(), mListener, 2);
        recyclerView.setAdapter(adapter);
    }
}
