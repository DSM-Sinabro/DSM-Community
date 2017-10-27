package org.sinabro.application.adapter;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;

import org.sinabro.application.R;
import org.sinabro.application.activities.DetailActivity;
import org.sinabro.application.model.BillboardItem;

import java.util.ArrayList;

import at.blogc.android.views.ExpandableTextView;

/**
 * Created by user on 2017-10-24.
 */

public class BillboardRecyclerAdapter extends RecyclerView.Adapter<BillboardRecyclerAdapter.ViewHolder> {

    ArrayList<BillboardItem> items;
    Context context;

    public BillboardRecyclerAdapter(ArrayList<BillboardItem> items, Context context) {
        this.items = items;
        this.context = context;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_billboard, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, final int position) {
        holder.title.setText(items.get(position).getTitle());
        holder.date.setText(items.get(position).getDate());
        holder.views.setText(items.get(position).getViews());
        holder.userName.setText(items.get(position).getUserName());
        holder.position.setText(items.get(position).getPosition());
        holder.content.setText(items.get(position).getContent());
        Glide.with(context).load(items.get(position).getProfilPic()).into(holder.profilePic);

        int lines = holder.content.getLineCount();
        if (lines > 30) {
            holder.viewMoreBtn.setVisibility(View.INVISIBLE);
        }

        holder.viewMoreBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(holder.content.isExpanded()) {
                    holder.content.toggle();
                    holder.viewMoreBtn.setText("view more");
                } else {
                    holder.content.toggle();
                    holder.viewMoreBtn.setText("close");
                }
            }
        });
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView title, userName, date, views, position, viewMoreBtn;
        ExpandableTextView content;
        ImageView profilePic;

        public ViewHolder(View itemView) {
            super(itemView);

            title = (TextView) itemView.findViewById(R.id.title);
            userName = (TextView) itemView.findViewById(R.id.userName);
            date = (TextView) itemView.findViewById(R.id.date);
            views = (TextView) itemView.findViewById(R.id.views);
            position = (TextView) itemView.findViewById(R.id.position);
            content = (ExpandableTextView) itemView.findViewById(R.id.content);
            profilePic = (ImageView) itemView.findViewById(R.id.profilePic);
            viewMoreBtn = (TextView) itemView.findViewById(R.id.viewMoreBtn);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    context.startActivity(new Intent(context, DetailActivity.class));
                }
            });
        }
    }
}
