# 贪婪整合包：涅槃

___
### 这是什么？

此为1.12.2[贪婪整合包](https://github.com/TCreopargh/GreedyCraft)移植高版本项目仓库

### 推荐的JVM参数: 

```JVM
-XX:+UseZGC -XX:+ZGenerational -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysPreTouch -XX:+AlwaysActAsServerClassMachine -XX:+ExplicitGCInvokesConcurrent -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=512M -XX:NonNMethodCodeHeapSize=16M -XX:ProfiledCodeHeapSize=248M -XX:NonProfiledCodeHeapSize=248M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:CompileThreshold=100000 -XX:+UseStringDeduplication
```