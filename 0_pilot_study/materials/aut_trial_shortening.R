load(here("0_pilot_study", "data", "aut-online-data.Rdata"))
i = 60000
  
  aut_task_3trials <- aut_task %>% 
   # filter(rt_rolling < i) %>%
    group_by(id) %>%
    summarise(n_items_3trials = n())
  
  aut_task_2trials <- aut_task %>% 
    filter(rt_rolling < i, item %in% c("fork", "paperclip")) %>%
    group_by(id) %>%
    summarise(n_items_2trials = n())
  
  
  
  combined <- left_join(aut_task_3trials, aut_task_2trials) %>%
    ungroup() %>%
    mutate(n_items_2trials = ifelse(is.na(n_items_2trials), 0, n_items_2trials)) %>%
    filter(n_items_2trials > 0)
  
  correlation = round(cor(combined$n_items_2trials, combined$n_items_3trials),2)
  
  ggplot(combined, aes(n_items_2trials, n_items_3trials)) +
          geom_point() +
          geom_jitter() +
          geom_smooth(method = "lm") +
          labs(
            x = "Two trials, 1 minute each",
            y = "Three trials, 2 minutes each",
            title = str_c("Trial shortened to ", i, " seconds."),
            subtitle = str_c("R = ", correlation)
          ) +
    theme_classic()



  
  aut_task_3trials <- aut_task %>% 
    # filter(rt_rolling < i) %>%
    group_by(id) %>%
    summarise(n_items_3trials = n())
  
  aut_task_2trials <- aut_task %>% 
    filter(rt_rolling < i, item %in% c("fork", "paperclip", "towel")) %>%
    group_by(id) %>%
    summarise(n_items_2trials = n())
  
  
  
  combined <- left_join(aut_task_3trials, aut_task_2trials) %>%
    ungroup() %>%
    mutate(n_items_2trials = ifelse(is.na(n_items_2trials), 0, n_items_2trials)) %>%
    filter(n_items_2trials > 0)
  
  correlation = round(cor(combined$n_items_2trials, combined$n_items_3trials),2)
  
  ggplot(combined, aes(n_items_2trials, n_items_3trials)) +
          geom_point() +
          geom_jitter() +
          geom_smooth(method = "lm") +
          labs(
            x = "Three trials, 1 minute each",
            y = "Three trials, 2 minutes each",
            title = str_c("Trial shortened to ", i, " seconds."),
            subtitle = str_c("R = ", correlation)
          ) +
    theme_classic()
  