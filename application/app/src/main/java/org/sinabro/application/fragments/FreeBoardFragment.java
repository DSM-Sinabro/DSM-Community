package org.sinabro.application.fragments;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.Fragment;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;

import com.bumptech.glide.Glide;
import com.bumptech.glide.RequestManager;

import org.sinabro.application.R;
import org.sinabro.application.activities.FreeBoardPostingActivity;
import org.sinabro.application.adapter.FreeBoardRecyclerViewAdapter;
import org.sinabro.application.model.FreeBoardRecyclerItem;

import java.util.ArrayList;


public class FreeBoardFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    private RecyclerView recyclerView;
    private FreeBoardRecyclerViewAdapter adapter;
    private RecyclerView.LayoutManager layoutManager;
    private ArrayList<FreeBoardRecyclerItem> itmes;
    private ArrayList postArrayList;

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;
    private FloatingActionButton writeFAB;


    public FreeBoardFragment() {
        // Required empty public constructor
    }


    // TODO: Rename and change types and number of parameters
    public static FreeBoardFragment newInstance() {
        FreeBoardFragment fragment = new FreeBoardFragment();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }

        setRecyclerData();
    }

    private void setRecyclerData() {
        postArrayList = new ArrayList<>();
        postArrayList.add(new FreeBoardRecyclerItem("https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/w6H/image/7rdWcmdo6gDQrbTSyyWJEcMZpVw",
                "오늘은 내 생일이야!!","박태임","2017-12-15","183","앙 기모찌 !!","http://img.insight.co.kr/static/2017/01/23/700/9J925O2P1HMFX7XLOU0V.jpg"));
        postArrayList.add(new FreeBoardRecyclerItem("https://www.google.co.kr/search?q=%EC%95%84%EC%9D%B4%EC%9C%A0&safe=active&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiplpiF1qzXAhXJFpQKHUnVDe8Q_AUICigB&biw=1920&bih=1156#imgrc=3c04vDjPpBJ4rM:",
                "오늘은 내 생일이야!!","박태임","2017-12-15","183","앙 기모찌 !!",null));
        postArrayList.add(new FreeBoardRecyclerItem("https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/w6H/image/7rdWcmdo6gDQrbTSyyWJEcMZpVw",
                "오늘은 내 생일이야!!","박태임","2017-12-15","183","앙 기모찌 !!","http://img.insight.co.kr/static/2017/01/23/700/9J925O2P1HMFX7XLOU0V.jpg"));
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view =  inflater.inflate(R.layout.fragment_free_board, container, false);

        writeFAB = (FloatingActionButton) view.findViewById(R.id.freeboard_writeFAB);
        writeFAB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getActivity(), FreeBoardPostingActivity.class);
                startActivity(intent);
            }
        });

        recyclerView = (RecyclerView)view.findViewById(R.id.recyclerView);
        recyclerView.setHasFixedSize(true);
        layoutManager = new LinearLayoutManager(getActivity());
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.scrollToPosition(0);
        RequestManager requestManager = Glide.with(getContext());
        adapter = new FreeBoardRecyclerViewAdapter(getContext(),postArrayList,requestManager);
        recyclerView.setAdapter(adapter);
        recyclerView.setItemAnimator(new DefaultItemAnimator());

        Log.d("postArrayList size",String.valueOf(postArrayList.size()));


        recyclerView.addOnItemTouchListener(new RecyclerView.OnItemTouchListener() {
            @Override
            public boolean onInterceptTouchEvent(RecyclerView rv, MotionEvent e) {
                return false;
            }

            @Override
            public void onTouchEvent(RecyclerView rv, MotionEvent e) {

            }

            @Override
            public void onRequestDisallowInterceptTouchEvent(boolean disallowIntercept) {

            }
        });
        return view;
    }


}
