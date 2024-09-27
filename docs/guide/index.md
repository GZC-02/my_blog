---
nav:
  # 同时设置导航名称和顺序，order 越小越靠前，默认为 0
  title: 配置项
  order: 1
#token:
#  contentMaxWidth: 1440
#  sidebarWidth: 200
# 单独设置分组名称
#group: 基础
# 同时设置分组名称和顺序，order 越小越靠前，默认为 0
group:
  title: 基础
  order: 1
---

# 1

# 任务

定时任务是企业级应用中的常见操作

- 年度报表
- 缓存统计报告
- ...

市面上流行的定时任务技术

- Quartz
- Spring Task

# 简单的定时

```java
package com.gzc.job;

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
```

![](https://cdn.nlark.com/yuque/0/2024/png/35376129/1707038044570-e29f70eb-3fe9-4dd2-a603-aab2aa1b1940.png)

# SpringBoot:整合 Quartz

- 相关概念

◆ 工作(Job):用于定义具体执行的工作

◆ 工作明细(JobDetail)：用于描述定时工作相关的信息

◆ 触发器(Trigger)：用于描述触发工作的规则，通常使用 cron 表达式定义调度规则

◆ 调度器(Scheduler)：描述了工作明细与触发器的对应关系

## 引入依赖（坐标）

```plain
<!--   quartz     -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

## 定义具体要执行的任务，继承 QuartzJobBean

```plain
package com.gzc.job;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

public class TimerTaskApp extends QuartzJobBean {

    @Override
    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
        System.out.println("Task is running!!!");
    }
}
```

## 定义工作明细与触发器，并绑定对应关系

```java
package com.gzc.config;

import com.gzc.job.TimerTaskApp;
import org.quartz.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class QuartzConfig {

    @Bean
    public JobDetail printJobDetail() {
        // 绑定具体的工作  storeDurably作用：持久化
        return JobBuilder.newJob(TimerTaskApp.class).storeDurably().build();
    }

    @Bean
    public Trigger printJobTrriger() {
        // cronSchedule 描述任务执行时间
        CronScheduleBuilder scheBuilder = CronScheduleBuilder.cronSchedule("0/5 * * * * ?");
        // 指定对应的工作明细
        return TriggerBuilder.newTrigger().forJob(printJobDetail()).withSchedule(scheBuilder).build();
    }
}

```

"0 0 0" : 0 时 0 分 0 秒

"0 0 0 1 1 ？" : 0 时 0 分 0 秒 1 日 1 月

"0 0 0 \* \* ？" : 0 时 0 分 0 秒任意日任意月

"0/15 0 0 \* \* ？" : 0 时 0 分 0 秒任意日任意月 15 秒执行一次

日期和星期不同时出现

# 整合 Task

## 开启定时任务

```java
package com.gzc;

import com.gzc.controller.UserController;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@MapperScan("com.gzc.mapper")
// 开启定时任务
@EnableScheduling
public class Application {

    public static void main(String[] args) {

        // 应用上下文
        ConfigurableApplicationContext ctx = SpringApplication.run(Application.class, args);
        UserController bean = ctx.getBean(UserController.class);
        System.out.println("bean ==> " + bean);
    }

}

```

## 设置定时执行的任务，并设定执行周期

```java
package com.gzc.job;

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
```

## 配置

<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1707039667672-b354bd24-8fbc-4e89-8da8-a59ec6e2b926.png" onerror="onImageErrorFunc(event)" onload="onLoadedFuncForQuickAction(event)">

![s](https://cdn.nlark.com/yuque/0/2024/png/35376129/1707039667672-b354bd24-8fbc-4e89-8da8-a59ec6e2b926.png)

![a](https://cdn.nlark.com/yuque/0/2023/webp/35376129/1699708300515-05fca29e-5ae6-4764-8ecc-6e8898d50d97.webp)

![](https://cdn.nlark.com/yuque/0/2023/webp/35376129/1699708300522-0b9d6932-52d7-4e6f-9d90-72bd07f5d460.webp)
<embed src="./sources/guide.md"></embed>
