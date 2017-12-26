package org.sinabro.daemmunity.model;

import android.graphics.drawable.Drawable;

/**
 * Created by parktaeim on 2017. 8. 14..
 */

public class CommentItem {
    private Drawable profile;
    private String writer;
    private String comment;
    private String date;


    public Drawable getProfile() {
        return profile;
    }

    public void setProfile(Drawable profile) {
        this.profile = profile;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }



}
