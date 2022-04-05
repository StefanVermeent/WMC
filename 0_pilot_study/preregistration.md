Preregistration Pilot 1
================

*Last updated on dinsdag, april 05, 2022 at 03:15 *

## Overview

## Part 1 - Study Information

### Q1. Working title (required)

Working memory capacity in people from harsh environments.

### Q2. Authors

-   [Stefan
    Vermeent](https://www.stefan-vermeent.nl)<sup>1,2</sup>[<img src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" alt="ORCID logo" width="16" height="16"/>](https://orcid.org/0000-0002-9595-5373)
-   [Ethan S. Young](https://www.ethan-young.com/)<sup>1</sup>
    [<img src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" alt="ORCID logo" width="16" height="16"/>](https://orcid.org/0000-0002-8232-0184)
-   Jean-Louis van
    Gelder<sup>2,3</sup>[<img src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" alt="ORCID logo" width="16" height="16"/>](https://orcid.org/0000-0002-7928-5066)
-   [Willem E.
    Frankenhuis](http://www.willem.maartenfrankenhuis.nl/)<sup>1,2</sup>[<img src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" alt="ORCID logo" width="16" height="16"/>](https://orcid.org/0000-0002-4628-1712)

*<sup>1</sup>Utrecht University*

*<sup>2</sup>Max Planck Institute for the Study of Crime, Security and
Law*

*<sup>3</sup>Leiden University*

### Q3. Description

This preregistration covers the first pilot study of this project. The
purpose of the project is to understand performance differences on
working memory capacity as a function of early-life adversity. We
include two versions of the Operation Span (Ospan) task: a standard
version and and a more present-oriented version.

### Q4. Research questions

1.  How does early-life violence exposure affect working memory capacity
    performance?
2.  Do people with more early-life violence exposure perform better on a
    more present-oriented version of a working memory capacity task?

### Q5. Hypotheses

General hypotheses 1. Individuals with more early-life violence exposure
have worse letter recall than individuals with less violence exposure on
the standard version of the Ospan, but benefit comparatively more from
the present-oriented version of the Ospan.

2.  Individuals with more early-life violence exposure process the math
    equations more slowly (operationalized through the [Drift
    Rate](#DDM)) than individuals with less violence exposure on the
    standard version of the Ospan. We have no a-priori expectations
    about a moderation by task version.

3.  Individuals with more early-life violence exposure allocate less
    time to the maintenance of letters in working memory
    (operationalized through the [non-decision time](#DDM)) than
    individuals with less violence exposure on the standard version of
    the Ospan, but show a comparatively bigger increase in non-decision
    time on the present-oriented version of the Ospan.

### Q6. Causal Model

The Directed Acyclic Graph (DAG) of the causal model that underlies our
hypotheses is depicted in the Figure below. Based on this DAG, we
control for socio-economic status (SES) in all main statistical models,
in order to account for the effect of SES and its “descendants” (i.e.,
education level and task anxiety) on the association between Adversity
and the different task performance indices (i.e., math processing speed,
attention allocation, and working memory capacity).

![](Fig1.png)<!-- -->

## Part 2 - Design Plan

### Q1. Study type

Experimental/cross-sectional

### Q2. Study design

The study has one within-subject factor (Ospan task version; standard
vs. present-oriented) and a continuous between-subject factor
(early-life adversity; operationalized as violence exposure and
unpredictability). The order of the task versions is counterbalanced.

## Part 3 - Sampling Plan

### Q1. Data collection procedures

Data will be collected using the online research platform Prolific
Academic. People are eligible for participation if they 1) grew up and
currently live in the United States; 2) Speak fluent English; 3) Are
between the ages of 18 and 30. We balance our sample to include 50%
males. Using the MacArthur Scale of Subjective Social Status that is a
part of Prolific’s pre-screening questions, we make sure that 50% of the
sample consists of participants who indicated their current perceived
socio-economic status (SES) to be relatively low (between 1 and 4 on a
10-point scale), and 50% consists of participants who have a high
perceived SES (between 5 and 10). The experiment is expected to take 30
minutes on average and participants will be paid 3.75 pounds.

### Q2. Sample size

Our target sample size is 500 people. We oversample with 50 participants
to account for people who fail inclusion criteria or encounter technical
issues for a total of 550 participants.

### Q3. Sample size rationale

We conducted a power simulation using the *faux* package in R
([DeBruine, 2021](#ref-debruine_2021)) to determine the optimal number
of participants to include (more information including all simulation
code on
[Github](https://github.com/StefanVermeent/attention_project/tree/preregistration1/preregistrations/1_pilot/scripts)).
Assuming an effect size of *β* = 0.1 and a [DDM](#DDM) parameter
recovery accuracy of *r* = .85, we estimated that we would need 500
participants to achieve at least 80% power. We sampled a total of 550
participants to account for necessary exclusions (based on our
experiences in the pilot study).

## Part 4 - Variables

### Q1. Manipulated variables

Ospan task condition: all participants complete a standard version and a
newly developed ‘present-oriented’ version of the Ospan task. In the
Ospan task, participants have to perform two tasks simultaneously: 1)
remember an increasingly long sequence of letters; 2) solve mathematical
equations. The two tasks alternate, meaning people have to maintain and
rehearse the letters in working memory while solving the equations. In
the standard version, both task components are presented in the center
of the screen. In the present-oriented version, the letters are
spatially laid out from left to right at the top of the screen, while
the equations are presented in the center of the screen. The letters are
covered by black boxes and appear one by one by removing a specific box.
See LINK for task materials and LINK for a working version of the task.

### Q2. Measured variables

Dependent variables (raw) Each version of the Ospan provides the
following DVs: 1. ospan_cap: total number of letters recalled in the
correct order on the standard task version. 2. ospan_math_acc: total
number of math equations solved correctly on the standard task version.

3.  ospan_math_acc: total number of math equations solved correctly on
    the present-oriented task version.
4.  ospan_math_rt: Mean reaction time (in seconds) on the correct math
    equation trials.

Dependent variables ([Drift Diffusion parameters](#DDM)) 5.
Ospan_math_v: Drift rate across all math trials. 6. Ospan_math_a:
Boundary separation across all math trials. 7. Ospan_math_t0:
Non-decision time across all math trials.

### Q3. Independent variables

1.  `vio_comp`: Violence exposure composite score. Consists of the
    unweighted average of two measures:
    -   `nvs_mean`: mean score on items of the Neighborhood Violence
        Scale (REFERENCE).
    -   Fighting_mean: The unweighted average of two items related to
        witnessing and participating in fights before age 13. `nvs_mean`
        and `fighting_mean` are z-transformed prior to averaging.
2.  `unp_comp`: Unpredictability composite score. Consists of the
    unweighted average of subjective unpredictability (`unp_subj`) and
    objective unpredictability (`unp_obj`), both of which are scaled
    before averaging. These measures consist of:
    -   Subjective unpredictability. Each of the following measures was
        z-transformed and then combined into a single scale through
        unweighted averaging:
        -   Questionnaire of Unpredictability in Childhood \[QUIC
            (adapted); Glynn et al. ([2019](#ref-glynn_2019))\]: We made
            three general changes to the original scale as described in
            Glynn et al. (2019; See [Table S2](#appendix)). First, we
            adapted all items to refer to experiences before age 13.
            This was done to reduce cognitive load from having to go
            back-and-forth between different time scales. Second, most
            items were rated on a scale of 1 (never true) to 5 (very
            often true) instead of the original yes/no answer format. An
            exception was made for four items of the parental
            environment scale which asked for more specific experiences
            (e.g., “I experienced changes in my custody arrangement”).
            For these items, we adopted a response scale with the
            options “never”, “only once”, “a couple times”, “several
            times”, “many times”. Third, quantifiers such as
            “frequently”, “often”, and “There was a period of time when
            \[…\]” were dropped to better match the response scale. We
            excluded the item “My parents got divorced” because it did
            not fit the response format and was captured by one of the
            items of the perceived unpredictability scale. An overall
            QUIC variable is computed by averaging all unweighted items.
        -   Perceived Unpredictability Scale (NVS): Consists of eight
            items measuring perceived unpredictability before age 13
            (e.g, “My family life was generally inconsistent and
            unpredictable from day-to-day”; See [Table S3](#appendix)
            for an overview of all items). Participants rated each on a
            scale from 1 (never true) to 5 (very often true).
        -   Confusion, Hubbub, and Order Scale \[CHAOS (adapted);
            Matheny et al. ([1995](#ref-matheny_1995))\]: Consists of 15
            items measuring the level of chaos in the household (e.g.,
            “No matter how hard we tried, we always seemed to be running
            late”; See [Table S4](#appendix) for an overview of all
            items). We make two changes to the original scale as
            described in Matheny et al. ([1995](#ref-matheny_1995)).
            First, all items are converted from the present tense to the
            past tense, and are endorsed as applying to participants’
            lives before age 13. Second, all items are rated on a scale
            of 1 (never true) to 5 (very often true) instead of the
            original yes/no answer format. An overall household chaos
            variable is computed by averaging the 15 unweighted items.
    -   Objective unpredictability. Each of the following measures was
        z-transformed and then combined into a single scale through
        unweighted averaging:
        -   Four items measuring the stability of the family and social
            environment. On a scale of 1 (the same all the time) to 5
            (constant and rapid changes), participants indicated how
            often the following aspects of their family and social
            environment changed before age 13: 1) economic status, 2)
            family environment, 3) childhood neighborhood environment,
            and 4) childhood school environment. The four items were
            averaged together.
        -   Residential changes. Participants answered the question
            “Before age 13, how many times did you move homes?” in an
            open response format.
        -   Household situation. Participants answered the question
            “Before age 13, did any other adults besides your caregivers
            live in your primary residence?” with either yes or no. If
            participants answered yes, two additional questions asked
            “How many different adult women (men) (**not** including
            your parent/caregiver) lived in your primary residence for a
            period of time?”. If the participant’s answer to one of
            these questions was \> 0, this prompted the additional
            question “Of those women (men), how many were romantically
            involved with (the wife or girlfriend of) your
            parent/caregiver.”. If participants did not reach any of the
            follow-up items because of their initial answer, their
            values were set to 0. We averaged the number of romantic
            partners for both parents/caregivers into a single variable.
            In addition, we calculated household size by summing the
            number of different adult men and women that lived in the
            primary residence for some period of time.

### Q4. Covariates

1.  `ses_comp`: Socio-economic status (SES) composite score. Consists of
    the unweighted average of subjective SES (`ses_subj`) and objective
    SES (`ses_obj`), both of which are scaled before averaging. These
    measures consist of:
    -   Subjective SES. Each of the following measures was z-tranformed
        and then combined into a single scale through unweighted
        averaging:
        -   Perceived level of resource scarcity. Consists of seven
            items (e.g., “Your family had enough money to afford the
            kind of home you all needed”; See [Table S6](#appendix)).
            The items are averaged together to create an unweighted
            composite score.
        -   Childhood social class. Participants answered the question
            “Which of these classes would you say your family belonged
            to **when you were growing up**?” on a 5-point scale:
            ‘Poor’, ‘Working class’, ‘Middle class’, ‘Upper-middle
            class’, ‘Upper class’.
    -   Objective SES. Each of the following measures was z-tranformed
        and then combined into a single scale through unweighted
        averaging:
        -   Highest education of caregivers/parents. Separate items for
            each caregiver, on an 8-point scale: ‘some high school’,
            ‘GED’, ‘high school diploma’, ‘some college but no college
            degree’, associate’s degree’, ‘bachelor’s degree’, ‘master’s
            degree’, or ‘doctoral or lab degree’. The caregivers’
            education levels are averaged to create an overall
            unweighted parental education composite.
        -   Childhood household income. six-point scale: ‘less than $
            25k/year’, ‘$25k - $49k/year,’$50 - $74k/year’, ‘$75 -
            $99k/year’, ‘$100 - $149k/year’, ‘more than $150k/year’.

## Part 5 - Analysis Plan

### Q1. Drift Diffusion Modeling (DDM)

DDM is a computational modeling technique for forced-choice binary
decision-making processes that takes trial-level reaction times and
accuracy and translates them into several distinct, latent cognitive
processes. These processes are 1) Drift rate (*v*), which is a measure
of processing speed, 2) Boundary separation (*a*), which is a measure of
response caution, 3) Non-decision time (\*\*T0\*), which contains any
process that is not related to the decision-making component, such as
stimulus encoding and response preparation, and 4) Starting point, which
indicates a potential response bias towards one of the two options.

DDM models are fit to the RT/accuracy data of the math subtask,
separately for each task version (standard and present-oriented) and
separately for each participant. We use the Fast-dm software to fit the
models ([Voss & Voss, 2007](#ref-voss_2007)). We use Maximum Likelihood
estimation as it has been shown to provide reliable estimates with
relatively few trials ([Lerche et al., 2017](#ref-lerche_2017)).
Parameters *a*, *v* and *T0* are freely estimated and *z* is fixed to
0.5 (the midpoint, indicating no response bias). In addition, all
inter-trial variability parameters are fixed to 0 to increase model
parsimony.

The model fit for all participants will be assessed through QQ-plots
comparing the empirical data with the model predictions following
([**grange_2020?**](#ref-grange_2020)). Using each participant’s
best-fitting parameters, we simulate RTs and accuracy for 50,000 trials
of each Ospan version. We calculate the total proportion accuracy and
the 25th, 50th, and 75th quantile of the response time distribution
(correct trials only) for both the simulated data and the empirical
data. The outcomes for all participants were plotted against each other.
The closer the points are to the diagonal line, the better the models
fit the participants’ data.

### Q2. Statistical models

All main models include SES as a covariate. We expect SES to have a
quadratic effect on violence exposure and unpredictability, such that
these types of adversity are most strongly associated to SES at the
lowest levels of SES, and less so at moderate and high levels of SES.
Prior to running the models below, we test whether the quadratic effect
holds or whether the association is better captured by a linear
effect. - `lm(vio_comp ~ ses_comp + ses_comp_squared)` -
`lm(unp_comp ~ ses_comp + ses_comp_squared)`

If the quadratic effect of SES is statistically significant, we include
it in the models below. If not, we only include the linear effect of
SES.

1.  Individuals with more early-life violence exposure have worse letter
    recall than individuals with less violence exposure on the standard
    version of the Ospan, but benefit comparatively more from the
    present-oriented version of the Ospan.
    -   Linear mixed model:
        `lmer(ospan_cap ~ vio_comp * task_version + ses_comp + ses_comp_squared)`
2.  Individuals with more early-life violence exposure process the math
    equations more slowly (operationalized through the Drift Rate) than
    individuals with less violence exposure on the standard version of
    the Ospan. We have no a-priori expectations about a moderation by
    task version.
    -   Linear mixed model:
        `lmer(ospan_math_v ~ vio_comp * task_version + ses_comp + ses_comp_squared)`
3.  Individuals with more early-life violence exposure allocate less
    time to the maintenance of letters in working memory
    (operationalized through the non-decision time) than individuals
    with less violence exposure on the standard version of the Ospan,
    but show a comparatively bigger increase in non-decision time on the
    present-oriented version of the Ospan.
    -   Linear mixed model:
        `lmer(ospan_math_t0 ~ vio_comp * task_version + ses_comp + ses_comp_squared)`

### Q3. Multiverse analyses

Online experiments come at the trade-off of having less experimental
control over the way in which participants complete the experiment and
over the environment in which they do so. It is largely unclear which
factors affect performance and how strong these effects are. We used
multiverse analysis for all main analysis to assess the robustness of
the results against various environmental factors and situations during
the experiment. We identified four arbitrary analytic decisions,
including or excluding 1) participants who had a recaptcha score below
0.5 (possibly indicating bots); 2) participants who did not enter
fullscreen mode prior to starting the Flanker Task; 3) participants who
exited fullscreen mode at any point during the task; 4) participants who
indicated high levels of noise in their environment; participants who
indicated extreme interruptions during the experiment

For each analysis, we report the median *β*, 95% confidence intervals,
proportion of *p*-values \< .05 across all analytic decisions. For the
primary analyses, we used a bootstrapping technique to compute overall
*p*-values to assess whether the obtained median *β* is significantly
larger than zero ([**simonsohn_2020?**](#ref-simonsohn_2020)).

### Q4. Transformations

### Q5. Data exclusion

Participant-level exclusions First, we excluded participants who did not
complete the full study and those who did not complete both versions of
the Ospan. Second, we analyzed responses to the attention checks and
reversed coded items in the questionnaire part of the experiment. We
excluded participants if they missed both attention check items or if
they had suspicious response patterns (e.g., consistently endorsing high
response options even when some items were reverse coded). Third, we
excluded participants whose screen height was \< 700 pixels, or whose
screen height was bigger than their screen width (suggesting that they
did not complete the experiment on a laptop or desktop pc). Finally, we
exclude participants whose accuracy on the math subtask is lower than
75% across all blocks in order to ensure that participants engaged
seriously with the task.

### Q6. Trial-level exclusions

trials with reaction times \< 250 ms or \> 3500 ms ([Ratcliff &
Childers, 2015](#ref-ratcliff_2015)) were excluded from the analyses.
Participants with more than 10 removed trials were excluded from the
analyses. Finally, we logged whether participants exited full-screen
mode and/or engaged with other browser tabs (i.e., blur events) at any
point during the Flanker Task. We excluded participants for whom blur
events occurred while a Flanker block was ongoing (but not while reading
instructions or taking breaks in between conditions). Full-screen exits
were included in the [multiverse analysis](#multiverse).

After applying the participant-level and trial-level exclusions listed
above, we check

## References

<div id="refs" class="references csl-bib-body hanging-indent"
line-spacing="2">

<div id="ref-debruine_2021" class="csl-entry">

DeBruine, L. (2021). *Faux: Simulation for factorial designs*. Zenodo.
<https://doi.org/10.5281/zenodo.5513951>

</div>

<div id="ref-glynn_2019" class="csl-entry">

Glynn, L. M., Stern, H. S., Howland, M. A., Risbrough, V. B., Baker, D.
G., Nievergelt, C. M., Baram, T. Z., & Davis, E. P. (2019). Measuring
novel antecedents of mental illness: The Questionnaire of
Unpredictability in Childhood. *Neuropsychopharmacology*, *44*(5),
876–882. <https://doi.org/10.1038/s41386-018-0280-9>

</div>

<div id="ref-lerche_2017" class="csl-entry">

Lerche, V., Voss, A., & Nagler, M. (2017). How many trials are required
for parameter estimation in diffusion modeling? A comparison of
different optimization criteria. *Behavior Research Methods*, *49*(2),
513–537. <https://doi.org/10.3758/s13428-016-0740-2>

</div>

<div id="ref-matheny_1995" class="csl-entry">

Matheny, A. P., Wachs, T. D., Ludwig, J. L., & Phillips, K. (1995).
Bringing order out of chaos: Psychometric characteristics of the
Confusion, Hubbub, and Order Scale. *Journal of Applied Developmental
Psychology*, *16*(3), 429–444.
<https://doi.org/10.1016/0193-3973(95)90028-4>

</div>

<div id="ref-ratcliff_2015" class="csl-entry">

Ratcliff, R., & Childers, R. (2015). Individual differences and fitting
methods for the two-choice diffusion model of decision making.
*Decision*, *2*(4), 237–279.
https://doi.org/<https://doi.org/10.1037/dec0000030>

</div>

<div id="ref-voss_2007" class="csl-entry">

Voss, A., & Voss, J. (2007). Fast-dm: A free program for efficient
diffusion model analysis. *Behavior Research Methods*, *39*(4), 767–775.
https://doi.org/<https://doi.org/10.3758/BF03192967>

</div>

</div>
