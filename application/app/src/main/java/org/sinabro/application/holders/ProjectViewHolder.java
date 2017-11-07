package org.sinabro.application.holders;

import android.content.Intent;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.sinabro.application.R;
import org.sinabro.application.RecyclerViewOnClickListener;
import org.sinabro.application.activities.DetailActivity;

import at.blogc.android.views.ExpandableTextView;

/**
 * Created by user on 2017-10-31.
 */

public class ProjectViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener{
    private RecyclerViewOnClickListener mListener;

    public TextView title, userName, date, views, position, viewMoreBtn;
    public ExpandableTextView content;
    public ImageView profilePic;
    public ImageButton delBtn, editBtn;
    public View view;

    public ProjectViewHolder(final View itemView, RecyclerViewOnClickListener listener) {
        super(itemView);

        mListener = listener;

        title = (TextView) itemView.findViewById(R.id.title);
        userName = (TextView) itemView.findViewById(R.id.userName);
        date = (TextView) itemView.findViewById(R.id.date);
        views = (TextView) itemView.findViewById(R.id.views);
        content = (ExpandableTextView) itemView.findViewById(R.id.content);
        profilePic = (ImageView) itemView.findViewById(R.id.profilePic);
        viewMoreBtn = (TextView) itemView.findViewById(R.id.viewMoreBtn);
        delBtn = (ImageButton) itemView.findViewById(R.id.delBtn);
        editBtn = (ImageButton) itemView.findViewById(R.id.editBtn);
        view = (LinearLayout) itemView.findViewById(R.id.mainContent);
    }

    @Override
    public void onClick(View v) {
        mListener.onClick(v, getAdapterPosition());
    }
}
