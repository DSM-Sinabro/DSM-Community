package org.sinabro.daemmunity.adapter;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.RequestManager;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.activities.FreeBoardDetailActivity;
import org.sinabro.daemmunity.model.FreeBoardRecyclerItem;

import java.util.ArrayList;

/**
 * Created by parktaeim on 2017. 10. 27..
 */


public class FreeBoardRecyclerViewAdapter  extends RecyclerView.Adapter<FreeBoardRecyclerViewAdapter.ViewHolder>{

    private Context context;
    private ArrayList<FreeBoardRecyclerItem> items = new ArrayList<>();
    private RequestManager requestManager;

    public FreeBoardRecyclerViewAdapter(Context context, ArrayList<FreeBoardRecyclerItem> items, RequestManager requestManager){
        this.context = context;
        this.items = items;
        this.requestManager = requestManager;
    }

    @Override
    public FreeBoardRecyclerViewAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_freeboard,parent,false);
        ViewHolder viewHolder = new ViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(FreeBoardRecyclerViewAdapter.ViewHolder holder, int position) {
        requestManager.load(items.get(position).getProfileImg()).into(holder.profileImg);
        holder.titleTextView.setText(items.get(position).getTitle());
        holder.writerTextView.setText(items.get(position).getWriter());
        holder.dateTextView.setText(items.get(position).getDate());
        holder.countViewsTextView.setText(items.get(position).getCountViews());
        holder.contentTextView.setText(items.get(position).getContentText());
        requestManager.load(items.get(position).getContentImage()).into(holder.contentImageView);

//        Log.d("profileImg === ",items.get(position).getProfileImg());
//        Log.d("contentImg === ",items.get(position).getContentImage());


        if(items.get(position).getContentImage() == null){
            holder.contentImageView.setVisibility(View.GONE);
        }else {
            holder.contentImageView.setVisibility(View.VISIBLE);
        }

        holder.cardView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context,FreeBoardDetailActivity.class);
                context.startActivity(intent);
            }
        });

    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{
        CardView cardView;
        ImageView profileImg;
        TextView titleTextView;
        TextView writerTextView;
        TextView dateTextView;
        TextView countViewsTextView;
        TextView contentTextView;
        ImageView contentImageView;

        public ViewHolder(View itemView){
            super(itemView);
            cardView = (CardView) itemView.findViewById(R.id.cardView);
            profileImg = (ImageView) itemView.findViewById(R.id.profile_img);
            titleTextView = (TextView) itemView.findViewById(R.id.titleTextView);
            writerTextView = (TextView) itemView.findViewById(R.id.writerTextView);
            dateTextView = (TextView) itemView.findViewById(R.id.dateTextView);
            countViewsTextView = (TextView) itemView.findViewById(R.id.viewsCountTextView);
            contentTextView = (TextView) itemView.findViewById(R.id.contentTextView);
            contentImageView = (ImageView) itemView.findViewById(R.id.contentImageView);

        }
    }
}
