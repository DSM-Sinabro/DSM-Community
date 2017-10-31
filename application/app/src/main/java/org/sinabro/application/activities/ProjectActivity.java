package org.sinabro.application.activities;

import android.content.DialogInterface;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;

import org.sinabro.application.R;
import org.sinabro.application.RecyclerViewOnClickListener;
import org.sinabro.application.adapter.ProjectRecyclerViewAdapter;
import org.sinabro.application.dialogs.AddProjectDialog;
import org.sinabro.application.model.ProjectItem;

import java.util.ArrayList;

/**
 * Created by user on 2017-10-24.
 */

public class ProjectActivity extends AppCompatActivity {

    private RecyclerView recyclerView;
    private RecyclerView.Adapter adapter;
    private RecyclerView.LayoutManager manager;
    private RecyclerViewOnClickListener mListener;
    private FloatingActionButton addBtn;
    private RecyclerViewOnClickListener listener;
    private AddProjectDialog addDialog;

    private ArrayList<ProjectItem> items;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_project);

        recyclerView = (RecyclerView) findViewById(R.id.contestRecyclerView);
        recyclerView.hasFixedSize();
        manager = new LinearLayoutManager(getApplicationContext(), LinearLayoutManager.VERTICAL, false);
        manager.hasFocus();
        recyclerView.setLayoutManager(manager);

        getData();

        addDialog = new AddProjectDialog(ProjectActivity.this);

        addBtn = (FloatingActionButton) findViewById(R.id.addListBtn);
        addBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                DisplayMetrics displayMetrics = new DisplayMetrics();
                getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);

                int screenWidth = displayMetrics.widthPixels;// 가로
                int screenHeight = displayMetrics.heightPixels;// 세로

                addDialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

                addDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
                    @Override
                    public void onDismiss(DialogInterface dialog) {
                        Log.d("--logCheck", addDialog.getsTitle() + ", " + addDialog.getsPosition());
                        items.add(new ProjectItem(addDialog.getsContent(),
                                addDialog.getsTitle(),
                                "username",
                                "today's date",
                                "0",
                                "picture",
                                addDialog.getsPosition()));
                        adapter.notifyDataSetChanged();

                        //todo : post to server, including details
                        // 리스트에서 보여지는것만 추가, 포스트하고 서버에서 아이디 주겠지? 그러면 그 아이디로 다시 디테일에서 부르자!
                    }
                });

                addDialog.show();
                addDialog.getWindow().setLayout(screenWidth, screenHeight);
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

        adapter = new ProjectRecyclerViewAdapter(items, getApplicationContext(), mListener);
        recyclerView.setAdapter(adapter);
    }

}
