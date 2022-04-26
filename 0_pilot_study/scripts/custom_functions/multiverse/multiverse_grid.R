multiverse_grid <- function(specs) {
  
  if(!all(c("spec_var", "spec_expr") %in% names(specs))) {
    stop("you don't have the correct variables in the specs dataframe. Make sure specs consists of the variables 'spec_var', 'spec_expr'.\n\n")
  }
  
  # If descriptive labels are not provided, generate automatic labels
  if(!"name" %in% names(specs)) {
    specs <- specs %>%
      mutate(name = str_c(spec_var, spec_value, sep="_"))
  }
  
  specs <- specs %>%
    group_by(spec_var) %>%
    mutate(spec_value = seq(0,n()-1,1))
  
  combinations <- specs %>%
    select(-spec_value) %>%
    group_by(spec_var) %>%
    summarise(n = n()) %>%
    mutate(n = n-1)
  
  varnames = combinations$spec_var
  
  combinations <- combinations %>%
    glue_data("{spec_var} = 0:{n}") %>%
    str_replace_all(" ", "") %>%
    map(function(x) {
      eval(parse(text=x))
    }) %>% 
    expand.grid %>%
    as_tibble() %>%
    rename_all(~varnames)

  
  spec_grid <- combinations %>%
    rownames_to_column("spec_number") %>%
    mutate(spec_number = as.numeric(spec_number)) %>%
    pivot_longer(!spec_number, names_to = "spec_var", values_to = "spec_value") %>%
    left_join(specs, by = c("spec_var", "spec_value"))
  
  return(spec_grid)
}
