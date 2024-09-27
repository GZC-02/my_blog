"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[904],{91756:function(t,o,n){n.r(o),n.d(o,{demos:function(){return a}});var e=n(67294),r=n(87870),a={}},44401:function(t,o,n){n.r(o),n.d(o,{demos:function(){return a}});var e=n(67294),r=n(26211),a={}},17252:function(t,o,n){n.r(o),n.d(o,{demos:function(){return a}});var e=n(67294),r=n(87079),a={}},11171:function(t,o,n){n.r(o),n.d(o,{demos:function(){return a}});var e=n(67294),r=n(68537),a={}},70475:function(t,o,n){n.r(o),n.d(o,{texts:function(){return r}});var e=n(87870);const r=[]},9978:function(t,o,n){n.r(o),n.d(o,{texts:function(){return r}});var e=n(26211);const r=[{value:"\u5B9A\u65F6\u4EFB\u52A1\u662F\u4F01\u4E1A\u7EA7\u5E94\u7528\u4E2D\u7684\u5E38\u89C1\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"\u5E74\u5EA6\u62A5\u8868",paraId:1,tocIndex:1},{value:"\u7F13\u5B58\u7EDF\u8BA1\u62A5\u544A",paraId:1,tocIndex:1},{value:"...",paraId:1,tocIndex:1},{value:"\u5E02\u9762\u4E0A\u6D41\u884C\u7684\u5B9A\u65F6\u4EFB\u52A1\u6280\u672F",paraId:2,tocIndex:1},{value:"Quartz",paraId:3,tocIndex:1},{value:"Spring Task",paraId:3,tocIndex:1},{value:`package com.gzc.job;

import java.util.Timer;
import java.util.TimerTask;

public class TimerTaskApp {

    public static void main(String[] args) {
        Timer timer = new Timer();
        TimerTask task = new TimerTask() {
            @Override
            public void run() {
                System.out.println("timer task run...");
            }
        };
        timer.schedule(task,0,2000);
    }
}
`,paraId:4,tocIndex:2},{value:"\u76F8\u5173\u6982\u5FF5",paraId:5,tocIndex:3},{value:"\u25C6 \u5DE5\u4F5C(Job):\u7528\u4E8E\u5B9A\u4E49\u5177\u4F53\u6267\u884C\u7684\u5DE5\u4F5C",paraId:6,tocIndex:3},{value:"\u25C6 \u5DE5\u4F5C\u660E\u7EC6(JobDetail)\uFF1A\u7528\u4E8E\u63CF\u8FF0\u5B9A\u65F6\u5DE5\u4F5C\u76F8\u5173\u7684\u4FE1\u606F",paraId:7,tocIndex:3},{value:"\u25C6 \u89E6\u53D1\u5668(Trigger)\uFF1A\u7528\u4E8E\u63CF\u8FF0\u89E6\u53D1\u5DE5\u4F5C\u7684\u89C4\u5219\uFF0C\u901A\u5E38\u4F7F\u7528 cron \u8868\u8FBE\u5F0F\u5B9A\u4E49\u8C03\u5EA6\u89C4\u5219",paraId:8,tocIndex:3},{value:"\u25C6 \u8C03\u5EA6\u5668(Scheduler)\uFF1A\u63CF\u8FF0\u4E86\u5DE5\u4F5C\u660E\u7EC6\u4E0E\u89E6\u53D1\u5668\u7684\u5BF9\u5E94\u5173\u7CFB",paraId:9,tocIndex:3},{value:`<!--   quartz     -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
`,paraId:10,tocIndex:4},{value:`package com.gzc.job;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

public class TimerTaskApp extends QuartzJobBean {

    @Override
    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
        System.out.println("Task is running!!!");
    }
}
`,paraId:11,tocIndex:5},{value:`package com.gzc.config;

import com.gzc.job.TimerTaskApp;
import org.quartz.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class QuartzConfig {

    @Bean
    public JobDetail printJobDetail() {
        // \u7ED1\u5B9A\u5177\u4F53\u7684\u5DE5\u4F5C  storeDurably\u4F5C\u7528\uFF1A\u6301\u4E45\u5316
        return JobBuilder.newJob(TimerTaskApp.class).storeDurably().build();
    }

    @Bean
    public Trigger printJobTrriger() {
        // cronSchedule \u63CF\u8FF0\u4EFB\u52A1\u6267\u884C\u65F6\u95F4
        CronScheduleBuilder scheBuilder = CronScheduleBuilder.cronSchedule("0/5 * * * * ?");
        // \u6307\u5B9A\u5BF9\u5E94\u7684\u5DE5\u4F5C\u660E\u7EC6
        return TriggerBuilder.newTrigger().forJob(printJobDetail()).withSchedule(scheBuilder).build();
    }
}

`,paraId:12,tocIndex:6},{value:'"0 0 0" : 0 \u65F6 0 \u5206 0 \u79D2',paraId:13,tocIndex:6},{value:'"0 0 0 1 1 \uFF1F" : 0 \u65F6 0 \u5206 0 \u79D2 1 \u65E5 1 \u6708',paraId:14,tocIndex:6},{value:'"0 0 0 * * \uFF1F" : 0 \u65F6 0 \u5206 0 \u79D2\u4EFB\u610F\u65E5\u4EFB\u610F\u6708',paraId:15,tocIndex:6},{value:'"0/15 0 0 * * \uFF1F" : 0 \u65F6 0 \u5206 0 \u79D2\u4EFB\u610F\u65E5\u4EFB\u610F\u6708 15 \u79D2\u6267\u884C\u4E00\u6B21',paraId:16,tocIndex:6},{value:"\u65E5\u671F\u548C\u661F\u671F\u4E0D\u540C\u65F6\u51FA\u73B0",paraId:17,tocIndex:6},{value:`package com.gzc;

import com.gzc.controller.UserController;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@MapperScan("com.gzc.mapper")
// \u5F00\u542F\u5B9A\u65F6\u4EFB\u52A1
@EnableScheduling
public class Application {

    public static void main(String[] args) {

        // \u5E94\u7528\u4E0A\u4E0B\u6587
        ConfigurableApplicationContext ctx = SpringApplication.run(Application.class, args);
        UserController bean = ctx.getBean(UserController.class);
        System.out.println("bean ==> " + bean);
    }

}

`,paraId:18,tocIndex:8},{value:`package com.gzc.job;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TimerTaskApp {

    @Scheduled(cron = "0/1 * * * * ?")
    public void print( ) {
        System.out.println("Task is running!!!");
    }
}
`,paraId:19,tocIndex:9}]},61070:function(t,o,n){n.r(o),n.d(o,{texts:function(){return r}});var e=n(87079);const r=[]},51446:function(t,o,n){n.r(o),n.d(o,{texts:function(){return r}});var e=n(68537);const r=[]}}]);
